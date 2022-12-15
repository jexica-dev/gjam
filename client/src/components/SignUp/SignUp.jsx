import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import "./SignUp.css";
import { signUp } from "../../services/users";
import { useHistory, Link } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function SignUp(props) {
  const [user, setUser] = useState(props);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const history = useHistory();

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const onSignUp = async (e) => {
    e.preventDefault();
    // const { setUser } = props;
    try {
      if (form.password !== form.passwordConfirmation) {
        setForm({
          ...form,
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Passwords do not match",
        });
        return;
      }
      const user = await signUp(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const inputBg = "bg-transparent";
  return (
    <div className=" border">
      <form className="flex flex-col" onSubmit={onSignUp}>
        <label>Sign up</label>
        <input
          className={inputBg}
          type="name"
          name="name"
          id="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className={inputBg}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className={inputBg}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <input
          className={inputBg}
          onChange={handleChange}
          required
          type="Password"
          name="passwordConfirmation"
          id="password-confirmation"
          value={form.passwordConfirmation}
          placeholder="Confirm Password"
        />
        <button type="submit">Sign up</button>
        {form.isError ? <p>{form.errorMsg}</p> : null}
      </form>
      {/* <Form className="form-container sign-up" onSubmit={onSignUp}>
        <Form.Group className="mb-3">
          <Form.Label>Create a Jam? Sign up.</Form.Label>
          <Form.Control
            type="name"
            name="name"
            id="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
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

        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleChange}
            required
            type="Password"
            name="passwordConfirmation"
            id="password-confirmation"
            value={form.passwordConfirmation}
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Button variant="outline-dark" type="submit">
          Sign up
        </Button>
        {form.isError ? <p>{form.errorMsg}</p> : null}
        <div id="link-container">
          <Link id="link" to="/signin">
            Already have an account? Sign in!
          </Link>
        </div>
      </Form> */}
    </div>
  );
}
