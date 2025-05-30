function Footer() {
  return (
    <footer className="bg-arc_bg items-center text-aquamarine text-center text-3xl pt-[4%] pb-[6%] lg:pb-[2%] lg:pt-[1.5%]">
      <ul className="flex justify-center p-0 mr-[2.2%]">
        <li className="mx-[0.5em]">
          <a
            className="hover:opacity-70 p-[0.5em]"
            href="https://www.linkedin.com/in/thomas-sporer-29aba5210/"
            >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="mx-[0.5em]">
          <a className="hover:opacity-70 p-[0.5em]" href="https://github.com/Tsporer">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="mx-[0.5em]">
          <a className="hover:opacity-70 p-[0.5em]" href="mailto:tsporer10@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;