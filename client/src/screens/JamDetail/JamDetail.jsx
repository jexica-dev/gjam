import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getJam, deleteJam } from "../../services/jams";
import { useHistory } from "react-router";
import "./JamDetail.css";
import React from "react";
import { addToCart } from "../../services/users";

export default function JamDetail(props) {
  const [isLoaded, setLoaded] = useState(false);
  const [jam, setJam] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchJam = async () => {
      const jam = await getJam(id);
      setJam(jam);
      setLoaded(true);
    };
    fetchJam();
  }, [id]);

  const deleteAndPush = () => {
    deleteJam(jam._id);
    setTimeout(() => {
      history.push("/jams");
    }, 500);
  };

  if (!isLoaded) {
    return <h1>Loading Jam...</h1>;
  }

  const handleAdd = () => {
    const added = addToCart(props.user.id, jam._id);
    if (added) {
      alert("Added to cart!");
    }
  };

  return (
    <Layout user={props.user}>
      <div className="py-7 gap-3 grid grid-cols-1 place-items-center">
        <div className=" lg:w-1/2 md:w-3/5 sm:w-full ">
          <img src={jam.imgURL} alt={jam.name} />
        </div>
        <div className="grid grid-cols-1 gap-1 jam-detail-info p-5 text-md font-gt-america  bg-red-700 mix-blend-luminosity lg:w-1/2 md:w-3/5 sm:w-full">
          <div className="relative">
            <h1 className="font-bold text-2xl">{jam.name}</h1>
            <div className=" mix-blend-color-burn  font-gt-mono font-bold">
              <div className="absolute right-0 top-[3rem] flex flex-row gap-2">
                {props.user && !jam.restricted ? (
                  <>
                    <button
                      className=" hover:mix-blend-lighten hover:invert-0  invert bg-red-500  p-2"
                      onClick={deleteAndPush}
                    >
                      Edit
                    </button>
                    <button
                      className=" hover:mix-blend-lighten hover:invert-0  invert bg-red-500  p-2"
                      onClick={deleteAndPush}
                    >
                      Delete
                    </button>
                  </>
                ) : null}
              </div>
              <button
                className="absolute right-0 top-0 invert hover:invert-0 bg-red-500 px-4 py-2"
                type="submit"
                onClick={handleAdd}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 w-3/4">
            <h1>${jam.price}</h1>
            <p>
              <span className="font-bold"> Ingredients:</span>{" "}
              {jam.ingredients.join(", ")}
            </p>
            <p>
              <span className=" font-bold">Spiciness:</span> {jam.spiciness}{" "}
              <span className="font-bold">Sweetness:</span> {jam.sweetness}
            </p>
            <p>{jam.description}</p>
            <p className="creator-tag">
              <span className="font-bold">Creator:</span> {jam.creator}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
