import BouncingBall from "./components/BouncingBall";
import PulsatingButton from "./components/PulsatingButton";
import ColorChangeSquare from "./components/ColorChangeSquare";
import SlidingText from "./components/SlidingText";
import ZigzagAnimation from "./components/ZigzagAnimation";
import WaveEffect from "./components/WaveEffect";
import AnimatedBackground from "./components/AnimatedBackground";

const App = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-[#0d1017]">
      <BouncingBall />
      <PulsatingButton />
      <ColorChangeSquare />
      <SlidingText />
      <ZigzagAnimation />
      <WaveEffect />
      <AnimatedBackground />
    </section>
  );
};

export default App;
