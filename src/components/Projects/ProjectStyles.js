import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
  .card {
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    text-align: center;
    width: 400px;

    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
  .card-info {
    width: 100%;
    padding: 0 50px;
    color: #e4e6e7;
    font-size: 2rem;
    line-height: 24px;
    text-align: justify;

    @media screen and (max-width: 640px) {
      padding: 0.3rem;
    }
  }
  .title-content {
    text-align: center;
    z-index: 20;
    width: 100%;
  }
  .title {
    font-weight: 500;
    letter-spacing: 2px;
    color: #9cc9e3;
    padding: 0.5rem 0;
    font-size: ${(props) => (props.title ? "3rem" : "2rem")};
  }

  hr {
    width: 50px;
    height: 3px;
    margin: 20px auto;
    border: 0;
    background: #d0bb57;
  }
  .intro {
    width: 170px;
  }
  .utility-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    margin: 2.5rem 0;
  }
  .external-links {
    color: #d4c0c0;
    font-size: 1.6rem;
    padding: 1rem 1.5rem;
    background: #6b3030;
    border-radius: 15px;
    transition: 0.5s;
    &:hover {
      background: #801414;
    }
  }
  .tag-list {
    display: flex;
    justify-content: space-around;
    padding: 2rem;
  }
  .tag {
    color: #d8bfbf;
    font-size: 1.5rem;
  }
`;
