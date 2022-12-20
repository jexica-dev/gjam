import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createJam, getJam, updateJam } from "../../services/jams.js";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import "./JamForm.css";

export default function JamForm(props) {
  const [jam, setJam] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    creator: "",
    price: "",
    description: "",
    imgURL: "",
    hoverImage: "",
    spiciness: "",
    sweetness: "",
    ingredients: ["", "", "", ""],
    userId: "",
  });

  let { id } = useParams();
  let history = useHistory();

  const ingredients = [
    "Apple",
    "Apricot",
    "Avocado",
    "Bacon",
    "Banana",
    "Blackberry",
    "Blueberry",
    "Cantaloupe",
    "Cardamom",
    "Chocolate",
    "Cinnamon",
    "Clementine",
    "Cloves",
    "Coconut",
    "Cranberry",
    "Cucumber",
    "Dragonfruit",
    "Fig",
    "Ginger",
    "Grape",
    "Grapefruit",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Lime",
    "Lychee",
    "Mango",
    "Maple Syrup",
    "Nectarine",
    "Nutella",
    "Nutmeg",
    "Orange",
    "Papaya",
    "Passionfruit",
    "Peach",
    "Peanut Butter",
    "Pear",
    "Pepper",
    "Pineapple",
    "Plum",
    "Pluot",
    "Pumpkin",
    "Raisin",
    "Raspberry",
    "Rhubarb",
    "Squash",
    "Strawberry",
    "Tangerine",
    "Tomato",
    "Vanilla",
    "Watermelon",
    "Yogurt",
  ];

  const defaultPicture = "https://i.imgur.com/48ffGSy.png";
  const defaultHover = "https://i.imgur.com/6wjmM3Y.png";

  useEffect(() => {
    if (id) {
      const fetchJam = async () => {
        const jam = await getJam(id);
        setJam(jam);
        if (jam) {
          setInputs(jam);
        }
      };
      fetchJam();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("ingredients")) {
      const newIngredients = inputs.ingredients;
      const ind = name.slice(-1) - 1;
      newIngredients[ind] = value;
      setInputs({
        ...inputs,
        ingredients: newIngredients,
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    while (inputs.ingredients.indexOf("") > 0) {
      inputs.ingredients.splice(inputs.ingredients.indexOf(""), 1);
    }
    const newJam = {
      ...inputs,
      userId: props.userId,
      restricted: false,
      imgURL: defaultPicture,
      hoverImage: defaultHover,
    };
    if (jam) {
      const updated = await updateJam(id, newJam);
      if (updated) {
        history.push(`/jams/${id}`);
      }
    } else {
      const created = await createJam(newJam);
      if (created) {
        history.push(`/jams/${created._id}`);
      }
      setIsCompleted({ created });
    }
  };

  const inputStyles =
    "text-white bg-transparent border-[.125px] w-full px-3 py-2";

  return (
    <Layout user={props.user}>
      <div className="pt-24 w-full grid grid-cols-1 place-items-center ">
        <label className=" pb-5  font-bold text-6xl font-gt-mono">
          {" "}
          {jam ? "modify" : "create a jam"}
        </label>
      </div>

      <div className="w-full grid grid-cols-1 place-items-center justify-around font-gt-america">
        <div
          style={{ backgroundColor: "rgba(250, 200, 175, 0.25)" }}
          className="border w-11/12  p-7 "
        >
          <form noValidate onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-7">
              <div className="grig grid-cols-1 w-full place-items-center">
                <input
                  className={inputStyles}
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jam Name"
                  onChange={handleChange}
                  value={inputs.name}
                />

                <input
                  className={inputStyles}
                  required
                  type="text"
                  name="creator"
                  id="creator"
                  placeholder="Creator"
                  onChange={handleChange}
                  value={inputs.creator}
                />

                <input
                  className={inputStyles}
                  required
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price"
                  onChange={handleChange}
                  value={inputs.price}
                />

                <div>
                  <input
                    className={inputStyles}
                    required
                    as="textarea"
                    style={{
                      height: "150px",
                      resize: "none",
                    }}
                    name="description"
                    id="description"
                    placeholder="Drop a line from your favorite jam."
                    onChange={handleChange}
                    value={inputs.description}
                  />
                </div>
              </div>

              {/* 2nd */}
              <div className="grid grid-cols-1">
                {/* 2 selects */}
                <div className=" grid grid-rows-4">
                  <label>Sweetness</label>
                  <select
                    className={inputStyles}
                    aria-label="Sweetness"
                    required
                    name="sweetness"
                    id="sweetness"
                    onChange={handleChange}
                    value={inputs.sweetness}
                  >
                    <option value="" disabled hidden></option>
                    <option value="50%">50%</option>
                    <option value="75%">75%</option>
                    <option value="100%">100%</option>
                  </select>

                  <label>Spiciness</label>
                  <select
                    className={inputStyles}
                    aria-label="Spiciness"
                    required
                    name="spiciness"
                    id="spiciness"
                    onChange={handleChange}
                    value={inputs.spiciness}
                  >
                    <option value="" disabled hidden></option>
                    <option value="0%">0%</option>
                    <option value="25%">25%</option>
                    <option value="50%">50%</option>
                    <option value="75%">75%</option>
                    <option value="100%">100%</option>
                  </select>
                </div>
                {/*  */}

                {/* ingredients */}
                <label>Ingredient</label>

                <div className="grid grid-cols-2">
                  <div>
                    <select
                      className={inputStyles}
                      required
                      name="ingredients1"
                      id="ingredients1"
                      onChange={handleChange}
                      value={inputs.ingredients[0]}
                    >
                      <option value="" disabled hidden>
                        Select
                      </option>
                      {ingredients.map((ing, index) => (
                        <option value={ing} key={index}>
                          {ing}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      className={inputStyles}
                      name="ingredients2"
                      id="ingredients2"
                      onChange={handleChange}
                      value={inputs.ingredients[1]}
                    >
                      <option value="" disabled hidden>
                        Select
                      </option>
                      {ingredients.map((ing, index) => (
                        <option value={ing} key={index}>
                          {ing}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      className={inputStyles}
                      required
                      name="ingredients3"
                      id="ingredients3"
                      onChange={handleChange}
                      value={inputs.ingredients[2]}
                    >
                      <option value="" disabled hidden>
                        Select
                      </option>
                      {ingredients.map((ing, index) => (
                        <option value={ing} key={index}>
                          {ing}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      className={inputStyles}
                      name="ingredients4"
                      id="ingredients4"
                      onChange={handleChange}
                      value={inputs.ingredients[3]}
                    >
                      <option value="" disabled hidden>
                        Select
                      </option>
                      {ingredients.map((ing, index) => (
                        <option value={ing} key={index}>
                          {ing}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center">
              <button
                className="mt-5 left-0  hover:mix-blend-exclusion  hover:text-white mix-blend-darken invert bg-red-500  p-2"
                type="submit"
              >
                {jam ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/*  */}

      {/* <Form className="jam-form" noValidate onSubmit={handleSubmit}>
        <Form.Label> {jam ? "Edit" : "Create a Jam"} </Form.Label>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" className="position-relative">
            <Form.Control
              required
              type="text"
              name="name"
              id="name"
              placeholder="Jam Name"
              onChange={handleChange}
              value={inputs.name}
            />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" className="position-relative">
            <Form.Control
              required
              type="text"
              name="creator"
              id="creator"
              placeholder="Creator"
              onChange={handleChange}
              value={inputs.creator}
            />

            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Control
              required
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              onChange={handleChange}
              value={inputs.price}
            />
            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" className="position-relative">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              style={{
                height: "150px",
                resize: "none",
              }}
              name="description"
              id="description"
              placeholder="Drop a line from your favorite jam."
              onChange={handleChange}
              value={inputs.description}
            />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" className="position-relative">
            <Form.Label>Sweetness</Form.Label>
            <Form.Select
              aria-label="Sweetness"
              required
              name="sweetness"
              id="sweetness"
              onChange={handleChange}
              value={inputs.sweetness}
            >
              <option value="" disabled hidden></option>
              <option value="50%">50%</option>
              <option value="75%">75%</option>
              <option value="100%">100%</option>
            </Form.Select>

            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" className="position-relative">
            <Form.Label>Spiciness</Form.Label>
            <Form.Select
              aria-label="Default select example"
              required
              name="spiciness"
              id="spiciness"
              onChange={handleChange}
              value={inputs.spiciness}
            >
              <option value="" disabled hidden></option>
              <option value="0%">0%</option>
              <option value="25%">25%</option>
              <option value="50%">50%</option>
              <option value="75%">75%</option>
              <option value="100%">100%</option>
            </Form.Select>

            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Label>Ingredients</Form.Label>
          <Form.Group as={Col} md="3" className="position-relative">
            <Form.Select
              required
              name="ingredients1"
              id="ingredients1"
              onChange={handleChange}
              value={inputs.ingredients[0]}
            >
              <option value="" disabled hidden>
                Select
              </option>
              {ingredients.map((ing, index) => (
                <option value={ing} key={index}>
                  {ing}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" className="position-relative">
            <Form.Select
              name="ingredients2"
              id="ingredients2"
              onChange={handleChange}
              value={inputs.ingredients[1]}
            >
              <option value="" disabled hidden>
                Select
              </option>
              {ingredients.map((ing, index) => (
                <option value={ing} key={index}>
                  {ing}
                </option>
              ))}
            </Form.Select>

            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" className="position-relative">
            <Form.Select
              required
              name="ingredients3"
              id="ingredients3"
              onChange={handleChange}
              value={inputs.ingredients[2]}
            >
              <option value="" disabled hidden>
                Select
              </option>
              {ingredients.map((ing, index) => (
                <option value={ing} key={index}>
                  {ing}
                </option>
              ))}
            </Form.Select>

            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" className="position-relative">
            <Form.Select
              required
              name="ingredients4"
              id="ingredients4"
              onChange={handleChange}
              value={inputs.ingredients[3]}
            >
              <option value="" disabled hidden>
                Select
              </option>
              {ingredients.map((ing, index) => (
                <option value={ing} key={index}>
                  {ing}
                </option>
              ))}
            </Form.Select>

            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button id="button" variant="outline-dark" type="submit">
          {jam ? "Update" : "Create"}
        </Button>
      </Form> */}
    </Layout>
  );
}
