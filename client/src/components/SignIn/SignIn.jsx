import { useState } from "react";
import { useHistory } from "react-router";
import Layout from "../../components/Layout/Layout";
import { signIn } from "../../services/users";
import { Link } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./SignIn.css";

export default function SignIn(props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
      });
    }
  };

  const inputStyle = "text-white bg-transparent border-[.125px]  px-3 py-2";
  return (
    <div
      style={{ backgroundColor: "rgba(250, 200, 175, 0.25)" }}
      className="border p-24"
    >
      <form
        className="grid grid-cols-1 place-items-center "
        onSubmit={onSignIn}
      >
        <label className="text-lg font-bold pb-5 "> Sign In</label>
        <input
          className={inputStyle}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className={inputStyle}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button
          className="mt-5 left-0  hover:mix-blend-exclusion  hover:text-white mix-blend-darken invert bg-red-500  p-2"
          type="submit"
        >
          Sign in
        </button>
      </form>

      {/* <Form className="form-container sign-in" onSubmit={onSignIn}>
        <Form.Group className="mb-3">
          <Form.Label>Sign In</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="outline-dark" type="submit">
          Sign in
        </Button>
        {form.isError ? <p>{form.errorMsg}</p> : null}
        <div id="link">
          <Link to="/signup">New to g'JAM? Sign up!</Link>
        </div>
      </Form> */}
    </div>
  );
}
