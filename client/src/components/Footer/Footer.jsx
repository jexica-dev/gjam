import "./Footer.css";

export default function Footer(props) {
  let full = "";

  props.banner ? (full = "w-full") : (full = "w-2/3");

  return (
    <div className="w-screen">
      <footer
        className={
          full +
          ` font-gt-america text-lg tracking-widest hover:font-normal
opacity-60 fixed bottom-5 z-0`
        }
      >
        &copy; <span className="font-bold opacity-50 ">GJAM</span>&nbsp;
        <span className="font-thin">:</span>&nbsp;
        <a
          className="hover:opacity-100 "
          href="https://www.linkedin.com/in/garrettfoster24/"
        >
          <span className="font-thin text-lg">Garrett</span>
        </a>
        &nbsp;·&nbsp;
        <a className="hover:opacity-100 " href="http://jexica.design">
          <span className="font-thin text-lg">Jexica</span>
        </a>
        &nbsp;·&nbsp;
        <a
          className="hover:opacity-100 "
          href="https://www.linkedin.com/in/casey-mcclenathan/"
        >
          <span className="font-thin text-lg">Casey</span>
        </a>
        &nbsp;·&nbsp;
        <a
          className="hover:opacity-100 "
          href="https://www.linkedin.com/in/joshua-ramnanan/"
        >
          <span className="font-thin text-lg">Josh</span>
        </a>
      </footer>
    </div>
  );
}
