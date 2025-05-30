function Header() {
  return (
    <nav className="bg-arc_bg text-frenchgray">
      <div className="w-full bg-arc_bg flex items-center justify-center p-4 text-frenchgray">
        <div className="bg-arc_bg text-xl text-center text-arc_purple block w-full lg:w-[12%]
          items-center justify-center align-center font-gotham m-auto pt-[5%] lg:pt-[1%] lg:ml-[30%] lg:my-[2%]">
          THOMAS SPORER
        </div>
        <div className="hidden md:block lg:flex justify-center bg-arc_bg mr-[30%]" id="navbar-default">
          <ul className="font-medium flex justify-center ease-in-out text-center bg-arc_bg text-arc_deeppurple font-gotham">
            {/* <li>
              <a href="#work" className="p-8 group transition-all ease-in-out duration-300 hover:text-aquamarine">
                <span className="p-[12px] bg-left-bottom bg-gradient-to-r from-aquahue to-aquamarine bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  projects
                </span>
              </a>
            </li> */}
            <li>
              <a href="https://www.linkedin.com/in/thomas-sporer-29aba5210/" className="p-[10px] group transition-all ease-in-out duration-300 hover:text-arc_greenblue">
                <span className="p-[10px] py-[16px] bg-bottom bg-gradient-to-r from-arc_greenblue to-arc_green bg-[length:0%_0px] bg-no-repeat group-hover:bg-[length:63%_2px] transition-all duration-500 ease-out rounded-full w-12 h-12">
                  <i className="fa-brands fa-linkedin w-10"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Tsporer" className="p-[10px] group transition-all ease-in-out duration-300 hover:text-arc_pink">
                <span className="p-[10px] py-[16px] bg-bottom bg-gradient-to-r from-arc_pink to-arc_greenblue bg-[length:0%_0px] bg-no-repeat group-hover:bg-[length:63%_2px] transition-all duration-500 ease-out rounded-full w-12 h-12">
                  <i className="fa-brands fa-github w-10"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:tsporer10@gmail.com" className="p-[10px] group transition-all ease-in-out duration-300 hover:text-arc_red">
                <span className="p-[10px] py-[16px] bg-bottom bg-gradient-to-r from-arc_purple to-arc_red bg-[length:0%_0px] bg-no-repeat group-hover:bg-[length:63%_2px] transition-all duration-500 ease-out rounded-full w-12 h-12">
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