import { useState, useEffect } from "react";
import { getFeaturedJams } from "../../services/jams";
import JamCard from "../JamCard/JamCard";
import "./FeaturedJams.css";

export default function FeaturedJams(props) {
  const [featuredJams, setFeaturedJams] = useState([]);

  useEffect(() => {
    const fetchFeaturedJams = async () => {
      const featuredJams = await getFeaturedJams();
      setFeaturedJams(featuredJams);
    };
    fetchFeaturedJams();
  }, []);

  return (
    <div className="sm:pt-64 lg:pt-0 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-52 sm:px-24 ">
      {featuredJams.map((jam, index) => {
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
