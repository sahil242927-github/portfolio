import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer, ModalBody } from '../styled-components';

const Modal = ({ hideModal, width, height, Body }) => {
  return ReactDOM.createPortal(
    <ModalContainer onClick={hideModal}>
      <ModalBody
        width={width}
        height={height}
        onClick={(e) => e.stopPropagation()}
      >
        {Body || 'Modal Body Text!'}
      </ModalBody>
    </ModalContainer>,
    document.querySelector('#modal')
  );
};

Modal.defaultProps = {
  width: '40vw',
  height: '40vh',
};

export default Modal;
