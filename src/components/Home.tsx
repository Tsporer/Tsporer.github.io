import React from "react";

function Home() {
  return (
    <>
      <Header />
      <About />
      <BarContainer />
      <WorkSection />
      <BarContainer2 />
      <DogsComponent />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <nav className="page__menu menu">
          <ul className="menu__list r-list">
            <li className="menu__group menu__group__nameli">
              <a className="menu__link menu__group__name">Thomas Sporer</a>
            </li>
            <li className="menu__group">
              <a href="#work" className="menu__link r-link text-underlined">
                Projects
              </a>
            </li>
            <li className="menu__group">
              <a
                href="mailto:tsporer10@gmail.com"
                className="menu__link r-link text-underlined"
              >
                Contact Me
              </a>
            </li>
            <div className="filler"></div>
            <li className="menu__group">
              <a
                href="https://www.linkedin.com/in/thomas-sporer-29aba5210/"
                className="menu__link r-link text-underlined menuIcon1"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="menu__group">
              <a
                href="https://github.com/Tsporer"
                className="menu__link r-link text-underlined menuIcon1"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="menu__group">
              <a
                href="mailto:tsporer10@gmail.com"
                className="menu__link r-link text-underlined menuIcon1"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

function ResumeLink() {
  return (
    <a
      href="/images/tsporerResume.pdf"
      id="resumeIconItem"
      download="Thomas_Sporer_Resume"
    >
      <i
        className="fa-solid fa-file-arrow-down"
        style={{ fontSize: "1.98em" }}
      ></i>
    </a>
  );
}

function About() {
  return (
    <section className="intro" id="home">
      <img src="/images/seniorPicture.png" className="intro__img" />

      <h2 className="section__title aboutme--header">about</h2>

      <div className="about_paragraph">
        <p>
          Hello! I am a senior at the University of Michigan College of
          Engineering studying Computer Science. I have a strong foundation in
          various aspects of technology and I am interested in web development,
          cybersecurity, AI, and ML. I look forward to working in these areas,
          and am eager to expand my skillset.
          <br />
          <br />I grew up in Morristown, NJ and my hobbies include running,
          guitar, and playing with my two labrador retrievers, JimBob and Ellie.
        </p>
      </div>

      <h2 className="section__title skills--header">skills</h2>

      <p className="frontend_header">frontend development</p>
      <p className="frontend">
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; HTML
        <br />
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; CSS
        <br />
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; JavaScript
        <br />
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; React
      </p>

      <p className="backend_header">backend development</p>
      <p className="backend">
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; Python
        <br />
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; SQL
        <br />
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; C<br />
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; C++
        <br />
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; C#
      </p>

      <p className="tools_header">development tools</p>
      <p className="tools">
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; version control (Git,
        Github)
        <br />
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; IDE (VS Code)
        <br />
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; Cloud Computing (AWS)
      </p>

      <p className="gamedev_header">game development</p>
      <p className="gamedev">
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; Unreal Engine
        <br />
        <i className="fa-solid fa-code"></i>&nbsp; &nbsp; Unity3D
      </p>

      <p className="resumeLink">resume</p>
      <ResumeLink />
    </section>
  );
}

function WorkSection() {
  return (
    <section className="my-work" id="work">
      <p className="section__title section__title--work">projects</p>

      {/* START PORTFOLIO 1 */}
      <div className="ProjectOne MrDuck__subtitle--work">DuckBob</div>
      <img
        src="/images/websiteArtDuck.png"
        alt="Placeholder picture"
        className="Duck__img"
      />
      <div className="Duck Duck__paragraph--work">
        DuckBob is a side-scroller where the player controls DuckBob, and must
        dodge crows, reeds, and catfish. DuckBob was created using Unity3D's
        game engine, C# scripting, and online pixel editing software.
      </div>

      <a href="#" className="portfolio__item">
        {/* <img src="img/Duck.png" alt="Project description" className="portfolio__img" /> */}
      </a>

      <a href="/DuckBob9.1/index.html" id="play__button" className="pbutton">
        play game
      </a>
      {/* END PORTFOLIO 1 */}

      <div className="proj_divider"></div>

      {/* Portfolio item 02 */}
      {/* START PORTFOLIO 2 */}
      <div className="ProjectTwo RMP__subtitle--work">
        robotic machine player
      </div>
      <img
        src="images/robot_cropped.jpg"
        alt="Placeholder picture"
        className="robot__img"
      />
      <div className="Robot robot__paragraph--work">
        Worked in a group of four students to generate, analyze, and refine the
        design of an electro-mechanical device making use of physics and
        mathematics. The robot is capable of driving, pushing, intaking objects
        and outputting them.
      </div>
      {/* END PORTFOLIO 2 */}
    </section>
  );
}

function DogsComponent() {
  return (
    <div className="dogs">
      <p className="dogs_title">JimBob and Ellie</p>
      <img
        src="/images/dogs.png"
        alt="Placeholder picture"
        className="dog_pics"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer" id="footer">
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/thomas-sporer-29aba5210/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/Tsporer">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="mailto:tsporer10@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

function BarContainer() {
  return (
    <div className="bar_container">
      <div className="bar_divider"></div>
    </div>
  );
}

function BarContainer2() {
  return (
    <div className="bar_container_2">
      <div className="bar_divider"></div>
    </div>
  );
}

export default Home;
