import Acomplishment from "./components/Acomplished/Acomplishment";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Tech from "./components/Technology/Technology";
import TimeLine from "./components/TimeLine/TimeLine";
import Header from "./components/Header/Header";

import { Section, Wrapper } from "./AppStyles";
import BackgroundAnimation from "./components/BgAnimation/BackgroundAnimation";

function App() {
  return (
    <Wrapper>
      <Header />
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Projects />
      <Tech />
      <TimeLine />
      <Acomplishment />
      <Footer />
    </Wrapper>
  );
}

export default App;
