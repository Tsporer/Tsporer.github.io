function Footer() {
  return (
    <footer className="main-text items-center text-center text-4xl lg:text-5xl">
      <div
        className="block lg:flex justify-center main-text mx-auto mt-[2%]"
        id="navbar-default"
      >
        <ul className="font-medium flex justify-center ease-in-out text-center main-text gap-2 lg:gap-0">
          <li className="li-a">
            <a
              href="https://www.linkedin.com/in/thomas-sporer-29aba5210/"
              className="footer-a"
            >
              <span className="footer-span">
                <i className="fa-brands fa-linkedin"></i>
              </span>
            </a>
          </li>
          <li className="li-a">
            <a href="https://github.com/Tsporer" className="footer-a">
              <span className="footer-span">
                <i className="fa-brands fa-github"></i>
              </span>
            </a>
          </li>
          <li className="li-a">
            <a href="/images/Thomas_Sporer_Resume.pdf" className="footer-a" target="_blank" rel="noopener noreferrer">
              <span className="footer-span">
                <i className="fa-solid fa-file-lines"></i>
              </span>
            </a>
          </li>
          <li className="li-a">
            <a href="mailto:tsporer@umich.edu" className="footer-a">
              <span className="footer-span justify-center">
                <i className="fa-solid fa-envelope"></i>
              </span>
            </a>
          </li>
          <li className="hidden lg:block">
            <a href="/DuckBob9.1/index.html" className="footer-a">
              <span className="footer-span justify-center">
                <i className="fa-solid fa-dove"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;