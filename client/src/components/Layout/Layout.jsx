import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import "./Layout.css";
import RightNav from "../Nav/RightNav";

export default function Layout(props) {
  return (
    <div className="layout w-screen">
      {props.banner ? (
        <>
          <Banner />
          <div className="w-full">{props.children}</div>
        </>
      ) : (
        <>
          <RightNav />
          <div className=" lg:w-4/6 md:w-4/6 sm:w-screen px-10 lg:px-0 md:px-0 sm:px-24">
            {props.children}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
