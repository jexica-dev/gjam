import "./Footer.css";

export default function Footer() {
  return (
    <footer className=" font-gt-america text-lg tracking-widest opacity-70 pb-10">
      &copy; <span className="font-bold ">GJAM</span>&nbsp;
      <span className="font-thin">:</span>&nbsp;
      <a id="footer-link" href="https://www.linkedin.com/in/garrettfoster24/">
        <span className="font-thin text-lg">Garret</span>
      </a>
      &nbsp;·&nbsp;
      <a id="footer-link" href="http://jexica.design">
        <span className="font-thin text-lg">Jexica</span>
      </a>
      &nbsp;·&nbsp;
      <a id="footer-link" href="https://www.linkedin.com/in/casey-mcclenathan/">
        <span className="font-thin text-lg">Casey</span>
      </a>
      &nbsp;·&nbsp;
      <a id="footer-link" href="https://www.linkedin.com/in/joshua-ramnanan/">
        <span className="font-thin text-lg">Josh</span>
      </a>
    </footer>
  );
}
