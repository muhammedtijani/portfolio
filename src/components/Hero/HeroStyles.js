import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 640px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
