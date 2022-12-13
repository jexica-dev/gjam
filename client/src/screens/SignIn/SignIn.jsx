import { useState } from "react";
import { useHistory } from "react-router";
import Layout from "../../components/Layout/Layout";
import { signIn } from "../../services/users";
import { Link } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./SignIn.css";

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

  return (
    <Layout user={props.user}>
      <div></div>
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
    </Layout>
  );
}
