import Particles from "../animations/Particles";
import Navbar from "../components/Navbar";
import Lanyard from "../animations/Lanyard";
import ClickSpark from "../animations/ClickSpark";

import TextType from "../animations/TextType";
import SplitText from "../animations/SplitText";
import Me from "../components/Me";
import GlassCard from "../components/GlassCard";
import "../Style/HoverGlass.css";
import ChromaGrid from "../components/ChromaGrid";
import Contact from "./Contact";


function WelcomePage() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const handleScroll = (event) => {
    const element = document.getElementById(event);
    const offset = 200; // adjust this value (e.g. height of a fixed navbar)

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen relative overflow-hidden" id="home">
        {/* Background */}
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <div className="absolute inset-0 z-0">
            <Particles
              particleColors={[
                "#32CD32",
                "#833AB4",
                "#FF4500",
                "#1E90FF",
                "#FFD700",
              ]}
              particleCount={1500}
              particleSpread={15}
              speed={0.2}
              particleBaseSize={130}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* 3D Lanyard */}
          <div className="absolute inset-0 z-10">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>

          {/* Content Layer - pointer-events-none allows clicks to pass through */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white pointer-events-none">
            <div className="pointer-events-auto">
              {/* <ShinyText
                text="Welcome to my portfolio!"
                disabled={false}
                speed={3}
                className="custom-class text-4xl"
              /> */}

              <SplitText
                text="Hello, Welcome to my portfolio!"
                className="text-4xl font-semibold text-center "
                delay={45}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />

              <br />
              <br />
              <TextType
                text={[
                  "My name is aoksothat.",
                  "Im a student.",
                  "I love creating web applications.",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-2xl"
              />
              <br />
              <br />
              <button
                onClick={() => handleScroll("projects")}
                className="px-8 py-3 bg-white hover:bg-gray-300 text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                View My Work
              </button>
            </div>
          </div>
        </ClickSpark>
      </div>
      <div className="w-full" id="about">
        <Me />
      </div>
      {/* Teachnology section */}
      <div className="w-[90%] m-auto h-screen mt-14 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl">Tool & Teachnologies</h1>
        <br />
        <p>My skills</p>
        <br />
        <div className="grid grid-rows-4 gap-8 holographic-container">
          <GlassCard />
        </div>
      </div>
      {/* My Project Experience  */}
      <div className="w-[90%] m-auto  flex flex-col items-center justify-center text-white">
        <div>
          <h1 className="text-3xl text-center">My Project</h1>
          <br />
          <p>
            Showing a selection of project that reflect my skill, creativity and
            passion.
          </p>
        </div>

        <div className="mt-10 h-[600px]" id="projects">
          <ChromaGrid />
        </div>
      </div>

      {/* Contact */}
      <div id="Contact">
        <Contact />
      </div>

      
    </div>
  );
}
export default WelcomePage;
