import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { clearCart, getCart } from "../../services/users";
import CartJam from "../../components/CartJam/CartJam";

import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

export default function Cart(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cart, setCart] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const cart = await getCart(props.user.id);
      setCart(cart);
      setIsLoaded(true);
    };
    fetchUser();
  }, [props.user, toggleFetch]);

  if (!isLoaded) {
    return (
      <Layout>
        <h1>issue</h1>
      </Layout>
    );
  }

  const handleClear = async () => {
    const clear = await clearCart(props.user.id);
    if (clear) {
      alert("cart cleared");
      history.push("/");
    }
  };

  let cartTotal = cart
    .reduce((prev, current) => {
      const currentPrice = Number(current.jam.price) * Number(current.quantity);
      return prev + currentPrice;
    }, 0)
    .toFixed(2);

  return (
    <Layout user={props.user} handleClear={handleClear} cart={true}>
      {cart.length === 0 ? (
        <div className="grid grid-cols-1 place-items-center">
          <h1 className="font-bold text-6xl font-gt-mono p-24 leading-15 ">
            cart is empty,
            <p className=" mix-blend-exclusion text-white">
              <NavLink to="/jams">shop jams</NavLink>
            </p>
          </h1>
        </div>
      ) : null}

      <div className=" min-h-screen">
        <div>
          <div className="  grid grid-cols-3 place-items-center ">
            {cart.map((cartItem, index) => (
              <>
                <CartJam
                  handleClear={handleClear}
                  jam={cartItem.jam}
                  quantity={cartItem.quantity}
                  key={index}
                  user={props.user}
                  setToggleFetch={setToggleFetch}
                />
              </>
            ))}
          </div>
          <div className=" ">
            <div className="fixed bottom-10  grid grid-cols-1 place-items-center w-3/5">
              <div className="text-2xl p-5 mix-blend-hard-light text-white bg-indigo-800  w-80 font-gt-mono   grid grid-cols-1 place-items-center">
                Total: ${cartTotal}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
