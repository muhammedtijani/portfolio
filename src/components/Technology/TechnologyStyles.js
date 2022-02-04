import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;

  @media screen and (max-width: 1024px) {
    margin: 64px 0;
  }
  @media screen and (max-width: 768px) {
    margin: 64px 0;
    gap: 24px;
  }
  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }

  .list-item {
    max-width: 320px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      max-width: 203px;
    }
    @media screen and (max-width: 640px) {
      margin-bottom: 14px;
      max-width: 320px;
      flex-direction: row;
    }
  }

  .list-container {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 640px) {
      margin-left: 18px;
    }
  }

  .list-title {
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: white;
    margin-bottom: 8px;
    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 28px;
    }
    @media screen and (max-width: 640px) {
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.02em;
      margin-bottom: 4px;
    }
  }
  .list-paragraph {
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.75);

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 28px;
    }
    @media screen and (max-width: 640px) {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
