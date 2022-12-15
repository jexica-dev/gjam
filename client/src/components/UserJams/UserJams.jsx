import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getUserJams } from "../../services/jams";
import JamCard from "../JamCard/JamCard";

export default function UserJams(props) {
  const [userJams, setUserJams] = useState([]);

  useEffect(() => {
    const fetchUserJams = async () => {
      const userJams = await getUserJams();
      setUserJams(userJams);
    };
    fetchUserJams();
  }, []);

  const userMatch = userJams.filter(
    (userId) => userJams.userId === props.userId
  );

  console.log(userJams);

  return (
    <Layout user={props.user} dashboard={true}>
      <div className="sm:pt-64 lg:pt-0 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-52 sm:px-24 ">
        {userMatch.map((jam, index) => {
          return (
            <JamCard
              imgURL={"https://i.imgur.com/m2o9NB9.png"}
              jam={jam}
              key={index}
              user={props.user}
            />
          );
        })}
      </div>
    </Layout>
  );
}
