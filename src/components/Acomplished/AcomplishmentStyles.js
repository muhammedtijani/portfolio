import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 40px;

  @media screen and (max-width: 768px) {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
  @media screen and (max-width: 768px) {
    gap: 10px;
    margin: 24px auto;
    grid-template-columns: repeat(2, 1fr);
    max-width: 500px;
  }
`;
export const Box = styled.div`
  background: #212d45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;

  @media screen and (max-width: 1024px) {
    height: 210px;
  }
  @media screen and (max-width: 768px) {
    height: 135px;
    padding: 16px;
  }
  @media screen and (max-width: 640px) {
    height: 110px;
    padding: 12px;

    &::nth-child(2n) {
      grid-row: 2;
    }
  }
`;
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media screen and (max-width: 640px) {
    font-size: 24px;
    line-height: 26px;
  }
`;
export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media screen and (max-width: 640px) {
    font-size: 10px;
    line-height: 14px;
  }
`;
