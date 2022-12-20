import React, { useEffect, useState } from "react";
import JamCard from "../../components/JamCard/JamCard";
import Layout from "../../components/Layout/Layout";
import { getJams } from "../../services/jams";
import { AZ, highestFirst, lowestFirst, ZA } from "../../utils/sort";
import "./Jams.css";

export default function Jams(props) {
  const [jams, setJams] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    const fetchJams = async () => {
      const allJams = await getJams();
      setJams(allJams);
      setSearchResult(AZ(allJams));
    };
    fetchJams();
  }, []);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult));
        break;
      case "name-descending":
        setSearchResult(ZA(searchResult));
        break;
      case "price-ascending":
        setSearchResult(lowestFirst(searchResult));
        break;
      case "price-descending":
        setSearchResult(highestFirst(searchResult));
        break;
      default:
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSearch = (e) => {
    const results = jams.filter((jam) =>
      jam.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResult(results);
    setApplySort(true);
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <Layout
      search={true}
      user={props.user}
      handleSearch={handleSearch}
      handleSort={handleSort}
      handleSubmit={handleSubmit}
    >
      <div className="w-full">
        <div className="lg:pt-0 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
          {searchResult.map((jam, index) => {
            return (
              <JamCard search={true} jam={jam} key={index} user={props.user} />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
