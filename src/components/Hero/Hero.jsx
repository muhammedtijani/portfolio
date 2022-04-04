import { Wrapper } from "./HeroStyles";
import { Section, SectionTitle, SectionText } from "../../AppStyles";
import Button from "../Button/Button";
import Resume from "../../assets/myResume.pdf";

const Hero = (props) => {
  return (
    <Section row nopadding>
      <Wrapper>
        <SectionText>Hi, my name is</SectionText>
        <SectionTitle>Muhammed Tijani</SectionTitle>
        <SectionTitle>I build things for the web</SectionTitle>
        <SectionText>
          I work as a software developer, specializing in the creation (and, on
          occasion, the design) of extraordinary digital experiences. Dedicated
          to creating beautiful web experiences that are simple and purposeful.
        </SectionText>
        <Button>
          <a href={Resume} download>
            Download Resume
          </a>
        </Button>
      </Wrapper>
    </Section>
  );
};

export default Hero;
