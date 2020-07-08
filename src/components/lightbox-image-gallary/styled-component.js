import styled from 'styled-components';

export const ImageContainer = styled.div`
  background-color: white;
  width: ${(props) => props.width || '40vw'};
  height: ${(props) => props.height || '40vh'};
  margin: 1rem;
  padding: 1rem;
  display: flex;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const LightBox = styled.div`
  background-color: grey;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
`;

export const LeftArrow = styled.span`
  padding: 1rem;
  color: white;
  font-size: 2rem;
  background-color: black;
  display: inline-block;
  align-self: center;
  position: relative;
  left: 7rem;
  z-index: 20;
`;
export const RightArrow = styled.span`
  padding: 1rem;
  color: white;
  font-size: 2rem;
  background-color: black;
  display: inline-block;
  align-self: center;
  position: relative;
  right: 7rem;
  z-index: 20;
`;
