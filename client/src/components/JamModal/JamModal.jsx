// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import "./JamModal.css";
// import Button from "react-bootstrap/Button";
import { addToCart } from "../../services/users";

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     border: "1px solid #000",
//     padding: theme.spacing(2, 4, 3),
//     alignItems: "left",
//   },
// }));

export default function JamModal(props) {
  // const classes = useStyles();
  const { open, handleClose } = props;

  const handleAdd = () => {
    const added = addToCart(props.user.id, props.jam._id);
    if (added) {
      alert("Added to cart!");
      handleClose();
    }
  };

  return (
    <div>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="modal-container">
              <div className="img-container">
                <img
                  width="300px"
                  src={props.jam.imgURL}
                  alt="{props.jam.name}"
                />
              </div>
              <div className="modal-details">
                <h1 className="modal-title" id="transition-modal-title">
                  {props.jam.name}
                </h1>
                <h4 id="transition-modal-description">
                  ${Number(props.jam.price).toFixed(2)}
                </h4>
                <p>Ingredients: {props.jam.ingredients.join(" ")}</p>
                <p>
                  {props.jam.description
                    .split(" ")
                    .slice(0, 10)
                    .join(" ")
                    .replace(/,\s*$/, "")}
                  ...
                </p>
                <div className="modal-btns">
                  <Link to={`/jams/${props.jam._id}`}>
                    <Button
                      id="detail-btn"
                      className="modal-btn"
                      variant="outline-dark"
                      type="submit"
                    >
                      More Details
                    </Button>
                  </Link>
                  {props.user ? (
                    <Button
                      variant="outline-dark"
                      className="modal-btn"
                      onClick={handleAdd}
                    >
                      Add to Cart
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal> */}
    </div>
  );
}
