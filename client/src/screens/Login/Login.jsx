import React from "react";
import Layout from "../../components/Layout/Layout";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

export default function Login(props) {
  return (
    <Layout user={props.user}>
      <h1 className="h-0 lg:h-fit md:h-fit sm:h-0 opacity-0 lg:opacity-100 md:opacity-100 sm:opacity-0 grid-cols-1 grid lg:pt-10 sm:p-0 font-bold text-6xl font-gt-mono sm:w-0 md:w-full lg:w-full place-items-center">
        login
      </h1>
      <div className="h-full md:grid-cols-1 sm:grid-cols-1 grid lg:grid-cols-2 lg:p-10 md:p-7 p-0 ">
        <SignIn setUser={props.setUser} user={props.user} />{" "}
        <SignUp setUser={props.setUser} user={props.user} />
      </div>
    </Layout>
  );
}
