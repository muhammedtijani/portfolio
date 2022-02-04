import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    width: 90%;
  }
`;
