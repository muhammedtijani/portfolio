import { Wrapper } from "./HeroStyles";
import { Section, SectionTitle, SectionText } from "../../AppStyles";
import Button from "../Button/Button";

const Hero = (props) => {
  return (
    <Section row nopadding>
      <Wrapper>
        <SectionTitle>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm a Front-End Web Developer who creates web applications with React
          JS. Dedicated to creating beautiful web experiences with a focus on
          simplicity and purpose.
        </SectionText>
        <Button>Learn More</Button>
      </Wrapper>
    </Section>
  );
};

export default Hero;
