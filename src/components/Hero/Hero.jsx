import { Wrapper } from "./HeroStyles";
import { Section, SectionTitle, SectionText } from "../../AppStyles";
import Button from "../Button/Button";
import Resume from "../../assets/myResume.pdf";

const Hero = (props) => {
  return (
    <Section row nopadding>
      <Wrapper>
        <SectionTitle>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm a Full Stack Web Developer who specializes in React JS web
          applications. Dedicated to creating beautiful web experiences that are
          simple and purposeful.
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
