import React, { useEffect, useState } from "react";
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

  return (
    <div className="pt-0 sm:pt-64 md:pt-0 lg:pt-0 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:px-24 md:px-28 sm:px-28 ">
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
  );
}
