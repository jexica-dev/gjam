import React from "react";
import Layout from "../../components/Layout/Layout";

export default function UserJams(props) {
  return (
    <Layout user={props.user}>
      <div>DASHBOARD</div>
    </Layout>
  );
}
