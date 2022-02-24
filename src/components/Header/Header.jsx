import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiCodeBoxFill } from "react-icons/ri";

import { Wrapper } from "./HeaderStyles";

const Header = () => {
  return (
    <Wrapper>
      <div className="logo">
        <RiCodeBoxFill size="3rem" />
        <span style={{ marginLeft: "1.5rem", fontSize: "2rem" }}>Coolzyte</span>
      </div>

      <div className="nav">
        <a href="#projects">Projects</a>
        <a href="#tech">Technology</a>
        <a href="#about">About</a>
      </div>

      <div className="social-icons">
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
    </Wrapper>
  );
};

export default Header;
