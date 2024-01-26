function Header() {
  return (
    <nav className="bg-charcoal text-frenchgray">
      <div className="w-full bg-charcoal flex items-center justify-between p-4 text-frenchgray">
        <div className="bg-charcoal text-xl text-center text-aquamarine block w-full lg:w-[12%]
          items-center justify-center align-center font-raleway m-auto pt-[5%] lg:pt-[1%] lg:ml-[1%] lg:my-[1%]">
          thomas sporer
        </div>
        <div className="hidden md:block bg-charcoal" id="navbar-default">
          <ul className="font-medium flex mt-4 ease-in-out text-center bg-charcoal text-frenchgray font-raleway">
            <li>
              <a href="#work" className="p-8 group transition-all ease-in-out duration-300 hover:text-aquamarine">
                <span className="p-[12px] bg-left-bottom bg-gradient-to-r from-aquahue to-aquamarine bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  projects
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/thomas-sporer-29aba5210/" className="p-8 group transition-all ease-in-out duration-300 hover:text-aquamarine">
                <span className="p-[12px] bg-left-bottom bg-gradient-to-r from-aquahue to-aquamarine bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  <i className="fa-brands fa-linkedin w-10"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Tsporer" className="p-8 group transition-all ease-in-out duration-300 hover:text-aquamarine">
                <span className="p-[12px] bg-left-bottom bg-gradient-to-r from-aquahue to-aquamarine bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  <i className="fa-brands fa-github w-10"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:tsporer10@gmail.com" className="p-8 group transition-all ease-in-out duration-300 hover:text-aquamarine">
                <span className="p-[12px] bg-left-bottom bg-gradient-to-r from-aquahue to-aquamarine bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  <i className="fa-solid fa-envelope w-10"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;