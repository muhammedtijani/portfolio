import { DiFirebase, DiReact, DiZend } from "react-icons/di";

import { Section, Divider, SectionText, SectionTitle } from "../../AppStyles";

import { List } from "./TechnologyStyles.js";

const Tech = () => {
  return (
    <Section id="tech">
      <Divider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world.
        From Back-end To Design
      </SectionText>
      <List>
        <li className="list-item">
          <DiReact size="3rem" />
          <div className="list-container">
            <h4 className="list-title">Front-End</h4>
            <p className="list-paragraph">
              Experience with
              <br /> React.js
            </p>
          </div>
        </li>
        <li className="list-item">
          <DiFirebase size="3rem" />
          <div className="list-container">
            <h4 className="list-title">Back-End</h4>
            <p className="list-paragraph">
              Experience with
              <br /> Node and Databases
            </p>
          </div>
        </li>
        <li className="list-item">
          <DiZend size="3rem" />
          <div className="list-container">
            <h4 className="list-title">UI/UX</h4>
            <p className="list-paragraph">
              Experience with
              <br /> tools like Figma
            </p>
          </div>
        </li>
      </List>
    </Section>
  );
};

export default Tech;
