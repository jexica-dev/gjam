import JamModal from "../JamModal/JamModal";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="w-full">
      <div className="">
        <Link to={`/jams/${props.jam._id}`}>
          <img
            onClick={handleOpen}
            className=""
            src={isShown ? props.jam.imgURL : props.jam.hoverImage}
            alt={name}
            onMouseEnter={() => setIsShown(false)}
            onMouseLeave={() => setIsShown(true)}
          />
        </Link>
      </div>

      {/* <div className="jam-info">
        <h3>{name}</h3>
        <p>${Number(price).toFixed(2)}</p>
      </div> */}
    </div>
  );
}
