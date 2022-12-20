import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  addToCart, removeFromCart
} from "../../services/users";

export default function JamCard(props) {
  const { jam, quantity } = props;

  const handleRemove = async () => {
    await removeFromCart(props.user.id, jam._id);
    props.setToggleFetch((prevState) => !prevState);
  };

  const handleAdd = async () => {
    await addToCart(props.user.id, jam._id);
    props.setToggleFetch((prevState) => !prevState);
  };

  return (
    <>
      <div className=" ">
        <div>
          <div className="grid grid-cols-1">
            <div className="card-image">
              <img
                // onClick={handleOpen}
                className="jam-card-image"
                src={jam.imgURL}
                alt={jam.name}
              />
            </div>
            <div className="flex flex-col p-5 ">
              <h3 className=" font-bold ">{jam.name}</h3>

              <div className="quantity">
                count:
                <span className="pl-4  font-gt-mono">{quantity}</span>
                <div className="flex flex-row justify-end gap-3 w-24 mix-blend-overlay">
                  <FontAwesomeIcon
                    style={{ width: "20%" }}
                    icon={faPlus}
                    onClick={handleAdd}
                    className="fa-2x"
                  />
                  <FontAwesomeIcon
                    style={{ width: "20%" }}
                    icon={faMinus}
                    onClick={handleRemove}
                    className="fa-2x"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
