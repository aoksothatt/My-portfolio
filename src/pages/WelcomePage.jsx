import Particles from "../animations/Particles";
import Navbar from "../components/Navbar";
import Lanyard from "../animations/Lanyard";
import ClickSpark from "../animations/ClickSpark";
import ShinyText from "../animations/ShinyText";
import TextType from "../animations/TextType";
import SplitText from "../animations/SplitText";
import Me from "../components/Me";
import GlassCard from "../components/GlassCard";

function WelcomePage() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
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
              <button className="px-8 py-3 bg-white hover:bg-gray-300 text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View My Work
              </button>
            </div>
          </div>
        </ClickSpark>
      </div>
      <div id="about">
        <Me />
      </div>

      {/* Teachnology section */}
      <div className="w-[90%] m-auto h-screen mt-60">
        <h1 className="text-3xl">Tool & Teachnologies</h1>
        <br />
        <p>My skills</p>
        <br />
        <div className="grid grid-rows-4 gap-8">
          <GlassCard />
        </div>
      </div>
    </div>
  );
}
export default WelcomePage;
