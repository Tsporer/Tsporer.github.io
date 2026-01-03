function About() {
  return (
    <div className="flex-grow main-text mx-auto lg:pt-0 lg:px-[3%] mt-[1%]">
      <div className="text-left w-[72%] sub-text mx-auto">
        I'm a developer at{" "}
        <a
          href="https://www.arbella.com"
          className="hlink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arbella Insurance Group
        </a>
        . I live in Quincy, MA and have experience in back-end development and
        data analysis. I graduated from the University of Michigan, College of
        Engineering in 2024.
        <br />
        <br />
        In the past, I worked as a software development intern at a startup
        called{" "}
        <a
          href="https://versebuilding.com/"
          className="hlink"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Verse
        </a>
        , using Unreal Engine 5 to develop and prototype{" "}
        <a
          href="https://www.versebuilding.com/games/walkxr"
          className="hlink"
          target="_blank"
          rel="noopener noreferrer"
        >
          WalkXR
        </a>
        .
        <br />
      </div>
    </div>
  );
}

export default About;