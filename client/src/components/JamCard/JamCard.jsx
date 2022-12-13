import "./JamCard.css";
import JamModal from "../JamModal/JamModal";
import { useState } from "react";

export default function JamCard(props) {
  const { name, price } = props.jam;
  const [open, setOpen] = useState(false);
  const [isShown, setIsShown] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex w-1/3 flex-col  items-center">
      <JamModal
        jam={props.jam}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        user={props.user}
      />

      <div className="flex justify-center">
        <img
          onClick={handleOpen}
          className="flex justify-center w-11/12 mb-4"
          src={isShown ? props.jam.imgURL : props.jam.hoverImage}
          alt={name}
          onMouseEnter={() => setIsShown(false)}
          onMouseLeave={() => setIsShown(true)}
        />
      </div>

      {/* <div className="jam-info">
        <h3>{name}</h3>
        <p>${Number(price).toFixed(2)}</p>
      </div> */}
    </div>
  );
}
