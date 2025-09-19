function Header() {
  return (
    <div className="flex-grow w-[100%] items-center justify-center">
      <img
        src="/images/thomas_sporer.png"
        alt="Thomas Sporer"
        className="rounded-full w-[20%] mx-auto my-[3%]"
      />
      <div className="main-text text-center text-2xl lg:text-7xl">
        Hi, I'm Thomas Sporer
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="/resume.pdf"
          className="text-2xl resume-text"
          download
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Header;