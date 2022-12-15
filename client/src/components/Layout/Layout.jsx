import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import "./Layout.css";
import RightNav from "../Nav/RightNav";

export default function Layout(props) {
  let searchStatus = false;
  if (props.search) {
    searchStatus = true;
  }
  return (
    <div className="layout w-screen">
      {props.banner ? (
        <>
          <Banner user={props.user} />
          <div className="w-full">{props.children}</div>
          <Footer />
        </>
      ) : (
        <>
          <RightNav
            user={props.user}
            dashboard={props.dashboard}
            search={searchStatus}
            handleSearch={props.handleSearch}
            handleSort={props.handleSort}
            handleSubmit={props.handleSubmit}
          />
          <div className="h-full selection:lg:w-4/6 md:w-4/6 sm:w-screen px-10 lg:px-0 md:px-0 sm:px-24">
            {props.children}
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
