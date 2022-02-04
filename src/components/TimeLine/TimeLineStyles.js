import styled from "styled-components";

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0f1624;
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: space-between;

  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }
  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 640px) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
export const CarouselMobileScrollNode = styled.div`
  @media screen and (max-width: 640px) {
    display: flex;
    min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
  }
`;
export const CarouselItem = styled.div``;
export const CarouselTitle = styled.h4``;
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;

  @media screen and (max-width: 640px) {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;
export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media screen and (max-width: 640px) {
    font-size: 10px;
    line-height: 16px;
    /* padding-right: 0; */
  }
`;
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media screen and (max-width: 640px) {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  margin-right: 4px;
  opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
  transform: ${(props) =>
    props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;
export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;
