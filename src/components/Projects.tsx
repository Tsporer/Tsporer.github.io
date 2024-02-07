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
        <div className="flex text-xl font-black text-aquamarine text-left font-raleway pt-[3%] lg:pt-0 px-[12%] lg:px-0 lg:ml-[0.7%]">
          duckbob
          <div className="hidden lg:flex">
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              C#
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Unity3D
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
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
          className="hidden lg:inline-block items-center h-[25%] w-[13%] bg-frenchgray rounded-xl 
                      justify-center text-center block ml-[3%] my-[2%] 
                      hover:bg-gradient-to-r hover:from-aquamarine hover:via-aquahue hover:to-aquamarine"
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
        {/* <img src="/images/magGlass.png" alt="" className="w-[70%]" /> */}
        <svg
          className="w-full h-full text-frenchgray dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.6"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <div className="col-span-5 px-[0.5%] lg:pt-[1%]">
        <div className="flex text-xl font-black text-aquamarine text-left font-raleway pt-[3%] lg:pt-0 px-[12%] lg:px-0 lg:ml-[0.7%]">
          search engine
          <div className="hidden lg:flex">
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Flask
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              HTML
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              CSS
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Python
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              SQLite
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
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
        {/* <img src="/images/insta.png" alt="" className="w-[80%]" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2476 2476"
          className="fill-frenchgray w-[80%]"
        >
          <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
        </svg>
      </div>
      <div className="col-span-5 px-[0.5%] pt-[8%] lg:pt-[1%]">
        <div className="flex text-xl font-black text-aquamarine text-left font-raleway pt-[3%] lg:pt-0 px-[12%] lg:px-0 lg:ml-[0.7%]">
          instagram clone
          <div className="hidden lg:flex">
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Flask
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Python
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              AWS EC2
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              HTML
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              CSS
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              React
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              SQLite
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              Bash
            </div>
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
              JavaScript
            </div>
          </div>
        </div>
        <div className="text-frenchgray text-left font-lato pt-[1%] px-[12%] lg:px-0 lg:ml-[0.7%]">
          Built three Instagram clones using static site generation, server-side
          dynamic pages, and client-side dynamic pages. Developed a REST API
          with Python and Flask to interface and manage data transactions with a
          SQLite database. Designed UI using JavaScript and React to include
          authentication, post interactions, and user profiles. Hosted the app
          on AWS with EC2, Gunicorn, and Nginx for efficient server management
          and scalable performance.
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
        <div className="flex text-xl font-black text-aquamarine text-left font-raleway pt-[3%] lg:pt-0 px-[12%] lg:px-0 lg:ml-[0.7%]">
          robotic machine player
          <div className="hidden lg:flex">
            <div className="border rounded-lg bg-frenchgray text-charcoal text-base border-aquahue border-[1px] ml-2 px-2 mb-1">
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