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
          <div className=" w-4/6 ">{props.children}</div>
        </>
      )}

      <Footer />
    </div>
  );
}
