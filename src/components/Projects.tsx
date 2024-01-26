function Projects() {
  return (
    <div>
      <div id="work" className='text-frenchgray p-0 text-center lg:text-left font-raleway py-[3%] lg:py-0 lg:pt-[2%] text-3xl font-medium lg:pl-[19%]'>projects</div>
      {/* <DiscoBaby /> */}
      <DuckBob />
      <RMP />
    </div>
  );
}

function DiscoBaby() {
  return (
    <div className="block lg:grid lg:grid-cols-6 pt-[2%] lg:px-[2%]">
      <div className="m-auto items-center w-[75%] lg:w-[90%] lg:ml-[3%]">
        <img src="/images/websiteArtDuck.png" alt="" />
      </div>
      <div className="col-span-5 px-[0.5%] lg:pt-[1%]">
        <div className="text-xl text-frenchgray text-left font-raleway pt-[3%] lg:pt-0 px-[12%] lg:px-0 lg:ml-[0.7%]">
          disco-baby
        </div>
        <div className="text-frenchgray text-left font-lato pt-[1%] px-[12%] lg:px-0 lg:ml-[0.7%]">
          disco-baby enables users to pick a song and send a challenge to their friends to
          guess the chosen song.
        </div>
        <a
          href="https://disco-baby.vercel.app/"
          className="inline-block items-center w-[60%] lg:w-[25%] bg-aquamarine rounded-full 
                      justify-center text-center py-[2%] lg:py-0 h-[30%] ml-[20%] lg:ml-[3%] mt-[4%] lg:mt-[2%] 
                      hover:bg-gradient-to-r hover:from-aquahue hover:via-aquamarine hover:to-aquahue"
        >
          <div className="text-color-charcoal lg:py-[3%] text-2xl">
            create a challenge
            <div className="text-color-charcoal leading-[0.5rem] text-sm">(ask me for the password)</div>
          </div>
        </a>
      </div>
    </div>
  );
}

function DuckBob() {
  return (
    <div className="block lg:grid lg:grid-cols-6 pt-[2%] lg:px-[2%]">
      <div className="m-auto items-center w-[75%] lg:w-[90%] lg:ml-[3%]">
        <img src="/images/websiteArtDuck.png" alt="" />
      </div>
      <div className="col-span-5 px-[0.5%] lg:pt-[1%]">
        <div className="text-xl text-frenchgray text-left font-raleway pt-[3%] lg:pt-0 px-[12%] lg:px-0 lg:ml-[0.7%]">
          duckbob
        </div>
        <div className="text-frenchgray text-left font-lato pt-[1%] px-[12%] lg:px-0 lg:ml-[0.7%]">
          DuckBob is a side-scroller where the player controls DuckBob, and must
          dodge crows, reeds, and catfish. DuckBob was created using Unity3D's
          game engine, C# scripting, and online pixel editing software.
        </div>
        <a
          href="/DuckBob9.1/index.html"
          className="hidden lg:inline-block items-center h-[30%] w-[25%] bg-aquamarine rounded-full 
                      justify-center text-center block ml-[3%] m-auto mt-[2%] 
                      hover:bg-gradient-to-r hover:from-aquahue hover:via-aquamarine hover:to-aquahue"
        >
          <div className="text-color-charcoal py-[3.5%] text-2xl">play game</div>
        </a>
      </div>
    </div>
  );
}

function RMP() {
  return (
    <div className="block lg:grid lg:grid-cols-6 pt-[4%] lg:px-[2%] mb-[3%] mt-[6%] lg:mt-0">
      <div className="m-auto items-center w-[75%] lg:w-[90%] lg:ml-[3%]">
        <img src="images/robot_cropped.jpg" alt="" className="robot__img" />
      </div>
      <div className="col-span-5 px-[0.5%]">
        <div className="text-xl text-frenchgray text-left font-raleway pt-[3%] lg:pt-0 px-[12%] lg:px-0 lg:ml-[0.7%]">
          robotic machine player
        </div>

        <div className="text-frenchgray text-left font-lato pt-[1%] px-[12%] lg:px-0 lg:ml-[0.7%]">
          Worked in a group of four students to generate, analyze, and refine
          the design of an electro-mechanical device making use of physics and
          mathematics. The robot is capable of driving, pushing, intaking
          objects and outputting them.
        </div>
      </div>
    </div>
  );
}

export default Projects;