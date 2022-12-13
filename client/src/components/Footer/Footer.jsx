import "./Footer.css";

export default function Footer() {
  return (
    <footer className=" font-gt-america tracking-widest  opacity-50">
      &copy; <span className="font-bold">GJAM</span>&nbsp;
      <span className="font-thin">:</span>&nbsp;
      <a id="footer-link" href="https://www.linkedin.com/in/garrettfoster24/">
        <span className="font-thin text-xs">Garret</span>
      </a>
      &nbsp;·&nbsp;
      <a id="footer-link" href="http://jexica.design">
        <span className="font-thin text-xs">Jexica</span>
      </a>
      &nbsp;·&nbsp;
      <a id="footer-link" href="https://www.linkedin.com/in/casey-mcclenathan/">
        <span className="font-thin text-xs">Casey</span>
      </a>
      &nbsp;·&nbsp;
      <a id="footer-link" href="https://www.linkedin.com/in/joshua-ramnanan/">
        <span className="font-thin text-xs">Josh</span>
      </a>
    </footer>
  );
}
