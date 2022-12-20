import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function JamCard(props) {
  const { name, price } = props.jam;
  const [isShown, setIsShown] = useState(true);

  return (
    <div className="w-full">
      <div className="">
        <Link to={`/jams/${props.jam._id}`}>
          <img
            className=""
            src={isShown ? props.jam.imgURL : props.jam.hoverImage}
            alt={name}
            onMouseEnter={() => setIsShown(false)}
            onMouseLeave={() => setIsShown(true)}
          />
        </Link>
        {props.search ? (
          <>
            <div className=" font-gt-america flex flex-col p-5">
              <h3 className="font-bold">{name}</h3>
              <p className=" font-gt-mono">${Number(price).toFixed(2)}</p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
