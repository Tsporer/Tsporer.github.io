function Projects() {
  return (
    <div>
      <div id="work" className='text-frenchgray p-0 text-center lg:text-left font-raleway py-[3%] lg:py-0 lg:pt-[2%] text-3xl font-medium lg:pl-[19%]'>projects</div>
      {/* <DiscoBaby /> */}
      <DuckBob />
      <SearchEngine />
      <InstagramClone />
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
          An in progress web app that enables users to pick a song and send a challenge to their friends to guess the chosen song. 
          Wrote TypeScript functions to retrieve song data from Deezer API and store it in an AWS DynamoDB database.
          Designed and implemented an intuitive UI with Svelte, Flowbite, and TailwindCSS for styling.
          Launched the application on Vercel, optimizing for scalability, performance, and seamless hosting.
          Reviewed code of other contributors and followed standard code review procedures using GitHub.
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
        <div className="flex text-xl font-black text-frenchgray text-left font-raleway pt-[3%] lg:pt-0 px-[12%] lg:px-0 lg:ml-[0.7%]">
          duckbob
          <div className="hidden lg:flex">
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              C#
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Unity3D
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Audacity
            </div>
          </div>
        </div>
        <div className="text-frenchgray text-left font-lato pt-[1%] px-[12%] lg:px-0 lg:ml-[0.7%]">
          DuckBob is a side-scroller where the player controls DuckBob, and must
          dodge crows, reeds, and catfish. Utilized C# scripting for custom game physics and Unity3D for game development.
        </div>
        <a
          href="/DuckBob9.1/index.html"
          className="hidden lg:inline-block items-center h-[25%] w-[13%] bg-aquamarine rounded-xl 
                      justify-center text-center block ml-[3%] my-[2%] 
                      hover:bg-gradient-to-r hover:from-aquahue hover:via-aquamarine hover:to-aquahue"
        >
          <div className="grid justify-items-center text-color-charcoal m-auto pb-1 items-center text-center h-full font-medium text-2xl">
            play game
          </div>
        </a>
      </div>
    </div>
  );
}


function SearchEngine() {
  return (
    <div className="block lg:grid lg:grid-cols-6 pt-[2%] lg:px-[2%] mt-[15%] lg:mt-[2%]">
      <div className="flex justify-center mx-auto items-center w-[75%] lg:w-[90%] lg:ml-[3%]">
        <img src="/images/magGlass.png" alt="" className="w-[70%]" />
      </div>
      <div className="col-span-5 px-[0.5%] lg:pt-[1%]">
        <div className="flex text-xl font-black text-frenchgray text-left font-raleway pt-[3%] lg:pt-0 px-[12%] lg:px-0 lg:ml-[0.7%]">
          search engine
          <div className="hidden lg:flex">
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Flask
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              HTML
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              CSS
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Python
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              SQLite
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Bash
            </div>
          </div>
        </div>
        <div className="text-frenchgray text-left font-lato pt-[1%] px-[12%] lg:px-0 lg:ml-[0.7%]">
          Engineered a scalable search engine similar to Google using Python and
          exposed it through a REST API. Implemented information retrieval
          concepts such as text analysis (tf-idf), link analysis (PageRank), and
          parallel data processing with MapReduce. Designed and implemented a
          responsive UI using Flask, HTML, and CSS.
        </div>
      </div>
    </div>
  );
}

function InstagramClone() {
  return (
    <div className="block lg:grid lg:grid-cols-6 pt-[2%] lg:px-[2%] mt-[15%] lg:mt-[2%]">
      <div className="flex justify-center mx-auto items-center w-[75%] lg:w-[90%] lg:ml-[3%]">
        <img src="/images/insta.png" alt="" className="w-[80%]" />
      </div>
      <div className="col-span-5 px-[0.5%] lg:pt-[1%]">
        <div className="flex text-xl font-black text-frenchgray text-left font-raleway pt-[3%] lg:pt-0 px-[12%] lg:px-0 lg:ml-[0.7%]">
          instagram clone
          <div className="hidden lg:flex">
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Flask
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Python
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              AWS EC2
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              HTML
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              CSS
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              React
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              SQLite
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Bash
            </div>
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              JavaScript
            </div>
          </div>
        </div>
        <div className="text-frenchgray text-left font-lato pt-[1%] px-[12%] lg:px-0 lg:ml-[0.7%]">
          Built three Instagram clones using static site generation, server-side
          dynamic pages, and client-side dynamic pages. Developed a REST API with
          Python and Flask to interface and manage data transactions with a
          SQLite database. Designed UI using JavaScript and React to include
          authentication, post interactions, and user profiles. Hosted the app on
          AWS with EC2, Gunicorn, and Nginx for efficient server management and
          scalable performance.
        </div>
      </div>
    </div>
  );
}

function RMP() {
  return (
    <div className="block lg:grid lg:grid-cols-6 pt-[4%] lg:px-[2%] mb-[3%] mt-[15%] lg:mt-[0%]">
      <div className="m-auto items-center w-[75%] lg:w-[90%] lg:ml-[3%]">
        <img src="images/robot_cropped.jpg" alt="" className="robot__img" />
      </div>
      <div className="col-span-5 px-[0.5%]">
        <div className="flex text-xl font-black text-frenchgray text-left font-raleway pt-[3%] lg:pt-0 px-[12%] lg:px-0 lg:ml-[0.7%]">
          robotic machine player
          <div className="hidden lg:flex">
            <div className="border rounded-lg bg-aquamarine text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              SOLIDWORKS 3D
            </div>
          </div>
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