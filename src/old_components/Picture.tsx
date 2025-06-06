import Footer from "../components/Footer";
import Resume from "../components/Resume";

function Picture() {
  return (
    <div className="relative w-full h-[50vh]">
      {/* Top Bar */}
      <div className="bg-white-2 flex items-center justify-between px-4 h-[50%] grid-cols-2">
        <div className="main-text text-center text-3xl w-[50%]">
          RESUME
          <Resume />
        </div>
        <div className="relative w-[50%] z-10">
          <Footer />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-fill h-[50%]"></div>

      {/* Thomas Sporer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/images/self_picture.PNG"
          alt="Thomas Sporer"
          className="rounded-full w-[20%] border-4 border-white z-20"
        />
      </div>
    </div>
  );
}

export default Picture;
