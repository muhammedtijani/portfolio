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
          I'm a Frontend web developer, I make web applications, usually with
          ReactJS. Devoted to crafting beautiful web experiences focused on
          simplicity and purpose
        </SectionText>
        <Button>Learn More</Button>
      </Wrapper>
    </Section>
  );
};

export default Hero;
