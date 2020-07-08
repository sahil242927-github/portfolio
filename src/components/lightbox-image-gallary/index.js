import React from 'react';
import ReactDOM from 'react-dom';
import {
  ImageContainer,
  LightBox,
  ImageWrapper,
  LeftArrow,
  RightArrow,
} from './styled-component';

const Modal = ({ hideLightBox, width, height, children }) => {
  return ReactDOM.createPortal(
    <LightBox onClick={hideLightBox}>
      <ImageContainer
        width={width}
        height={height}
        onClick={(e) => e.stopPropagation()}
      >
        <LeftArrow>Prev</LeftArrow>
        <ImageWrapper>{children}</ImageWrapper>
        <RightArrow>Next</RightArrow>
      </ImageContainer>
    </LightBox>,
    document.querySelector('#modal')
  );
};

Modal.defaultProps = {
  width: '40vw',
  height: '40vh',
};

export default Modal;
