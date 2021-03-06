import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Wrapper } from "./FooterStyles";

const Footer = () => {
  return (
    <Wrapper>
      <ul className="link-list">
        <div className="link-column">
          <h4 className="link-title">Call</h4>
          <a href="tel:+2348076319032 " className="link-item">
            +234-807-631-9032
          </a>
        </div>
        <div className="link-column">
          <h4 className="link-title">Email</h4>
          <a href="mailto:tundecool23@gmail.com" className="link-item">
            coolzyte@gmail.com
          </a>
        </div>
      </ul>
      <div className="social-icons-container">
        <div className="company-container">
          <p className="slogan">Devoted to crafting beautiful web experience</p>
        </div>
        <div className="social-container">
          <a
            href="https://github.com/muhammedtijani"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillGithub size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammedtijani/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillLinkedin size="3rem" />
          </a>
          <a
            href="https://github.com/coolzyte"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillInstagram size="3rem" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
