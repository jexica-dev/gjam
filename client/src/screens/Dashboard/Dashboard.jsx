import React from "react";
import Layout from "../../components/Layout/Layout";
import UserJams from "../../components/UserJams/UserJams";

export default function Dashboard(props) {
  return (
    <Layout user={props.user} dashboard={true}>
      <h1 className=" grid-cols-1 grid py-10 font-bold text-6xl font-gt-mono w-full place-items-center">
        custom jams
      </h1>
      <UserJams />
    </Layout>
  );
}
