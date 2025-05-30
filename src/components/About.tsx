import Resume from "./Resume";

function About() {
  return (
    <div className="block" id="home">
      <div className="block lg:grid lg:grid-cols-6 pt-[2%] lg:pt-0 lg:px-[30%]">
        <div className="m-auto items-center w-[75%] lg:w-[90%] lg:ml-[3%]">
          <img src="/images/seniorPicture.png" alt="" className="mt-[5%]" />
        </div>
        <div className="col-span-5 px-[0.5%]">
          <div
            className="text-3xl text-frenchgray text-left font-gotham
                          pt-[3%] lg:pt-[2%] px-[12%] lg:px-0 lg:ml-[0.7%]"
          >
            ABOUT
          </div>

          <div className="text-frenchgray text-left font-gotham pt-[1%] px-[12%] lg:px-0 lg:ml-[0.7%]">
            <p>
              HI, IM A DEVELOPER AT ARBELLA INSURANCE GROUP. I LIVE IN QUINCY,
              MA AND HAVE EXPERIENCE IN BACK-END DEVELOPMENT AND DATA ANALYSIS.
              I GRADUATED FROM THE UNIVERSITY OF MICHIGAN, COLLEGE OF
              ENGINEERING IN 2024. 
              <br />
              <br />
              IN THE PAST, I WORKED AS A SOFTWARE
              DEVELOPMENT INTERN AT A STARTUP CALLED THE VERSE, USING UNREAL
              ENGINE 5 TO DEVELOP AND PROTOTYPE WALKXR.
              <br />
            </p>
          </div>
        </div>
      </div>
      {/* 
  
      <div className="text-3xl text-frenchgray text-left font-raleway
                          pt-[8%] lg:pt-[1%] px-[12%] lg:px-[19%]">skills</div>
      <div className="block lg:grid lg:grid-cols-4 pt-[2%] lg:pt-[1%] lg:pl-[16.5%]">

        <div>
          <p className="text-base align-start italic text-left pl-[12%] font-lato text-frenchgray">frontend development</p>
          <p className="text-base align-start text-left font-lato text-frenchgray pl-[12%] lg:pt-[2%]">
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; React
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; JavaScript
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; HTML
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; CSS
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; Svelte
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; Swift
          </p>
        </div>

        <div>
          <p className="text-base align-start italic text-left pl-[12%] pt-[5%] lg:pt-0 font-lato text-frenchgray">backend development</p>
          <p className="text-base align-start text-left font-lato text-frenchgray pl-[12%] lg:pt-[2%]">
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; Python
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; C++
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; SQL
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; C<br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; C#
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; Scheme
          </p>
        </div>

        <div>
          <p className="text-base align-start italic text-left pl-[12%] pt-[5%] lg:pt-0 font-lato text-frenchgray">development tools</p>
          <p className="text-base align-start text-left font-lato text-frenchgray pl-[12%] lg:pt-[2%]">
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; version control (Git,
            Azure DevOps)
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; IDE (VS Code)
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; Cloud Computing (AWS DynamoDB/EC2)
          </p>
        </div>

        <div>
          <p className="text-base align-start italic text-left pl-[12%] pt-[5%] lg:pt-0 font-lato text-frenchgray">game development</p>
          <p className="text-base align-start text-left font-lato text-frenchgray pl-[12%] lg:pt-[2%]">
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; Unreal Engine
            <br />
            <i className="fa-solid fa-code"></i>&nbsp; &nbsp; Unity3D
          </p>
        </div>
        </div>
        */}

      <div className="text-aquamarine text-center font-gotham text-raleway pt-[3%] lg:pt-[2%] text-3xl pb-[3%] lg:pb-[1%]">
        RESUME
      </div>
      <Resume />
    </div>
  );
}

export default About;