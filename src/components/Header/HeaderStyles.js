import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
  @media screen and (max-width: 640px) {
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }

  .logo {
    grid-area: 1/1/2/2;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;

    @media screen and (max-width: 640px) {
      grid-area: 1/1/2/3;
    }
  }

  .nav {
    grid-area: 1/2/2/4;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
      grid-area: 1/2/3/5;
    }

    @media screen and (max-width: 640px) {
      grid-area: 2/2/3/5;
    }
  }

  .nav a {
    font-size: 2rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;

    &:hover {
      color: #fff;
      opacity: 1;
      cursor: pointer;
    }

    @media screen and (max-width: 640px) {
      padding: 0.5rem;
    }
  }

  .social-icons {
    grid-area: 1/5/2/6;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 640px) {
      grid-area: 1/4/2/6;
    }
  }

  .social-icons a {
    transition: 0.3s ease;
    color: white;
    border-radius: 50%;
    padding: 8px;
    &:hover {
      background-color: #212d45;
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;
