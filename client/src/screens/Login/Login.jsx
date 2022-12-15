import React from "react";
import Layout from "../../components/Layout/Layout";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

export default function Login(props) {
  return (
    <Layout user={props.user}>
      <div className="h-full md:grid-cols-1 sm:grid-cols-1 grid lg:grid-cols-2 p-10  ">
        <SignIn /> <SignUp />
      </div>
    </Layout>
  );
}
