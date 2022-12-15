import React from "react";
import Layout from "../../components/Layout/Layout";
import UserJams from "../../components/UserJams/UserJams";

export default function Dashboard(props) {
  return (
    <Layout user={props.user} dashboard={true}>
      <UserJams />
    </Layout>
  );
}
