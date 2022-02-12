import { projects } from "../../constants/constants";
import { Section, SectionTitle, Divider } from "../../AppStyles";
import { Container } from "./ProjectStyles";

const Project = (props) => {
  return (
    <Section nopadding id="projects">
      <Divider />
      <SectionTitle main>Projects</SectionTitle>
      <Container>
        {projects.map((project, index) => {
          const {
            id,
            image,
            title,
            description,
            tags,
            source,
            visit,
          } = project;
          return (
            <div className="card" key={id}>
              <img src={image} alt="commerce" />
              <div className="title-content">
                <div className="title" title>
                  {title}
                </div>
                <hr />
              </div>
              <div className="card-info">{description}</div>
              <div>
                <div className="title-content">Stack</div>
                <ul className="tag-list">
                  {tags.map((tag, index) => {
                    return (
                      <li className="tag" key={index}>
                        {tag}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="utility-list">
                <a
                  href={source}
                  className="external-links"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <a
                  href={visit}
                  className="external-links"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </Container>
    </Section>
  );
};

export default Project;
