import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0%{
    opacity:0.4;
  }
  100%{
    opacity:1;
  }
`;

export const ModalContainer = styled.div`
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
export const ModalBody = styled.div`
  background-color: white;
  width: ${(props) => props.width || '40vw'};
  height: ${(props) => props.height || '40vh'};
  margin: 5rem;
  padding: 5rem;
`;

export const PageHeading = styled.h2`
  font-size: 4rem;
  /* padding: 1rem 0 1rem 2rem; */
  font-family: $font-heading;
  font-weight: 400;
`;

export const Error = styled.p`
  font-size: 1rem;
  color: red;
  padding-bottom: 1.2rem;
  font-weight: 500;
  font-style: italic;
`;
export const PageHeadingWithLines = styled.h2`
  text-align: center;
  display: grid;
  grid-template-columns: 10% minmax(min-content, max-content) 10%;
  align-items: center;
  justify-content: center;
  grid-column-gap: 1rem;
  font-size: 4rem;
  font-weight: 400;
  color: ${(props) => props.color || '$color-grey-dark-1'};
  &:before,
  &:after {
    content: '';
    height: 1px;
    display: block;
    background-color: currentColor;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.8;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  color: var(--border-color-grey);
  border: 1px solid var(--border-color-light-grey);
  height: 4rem;
  width: 100%;
  font-weight: 200;
  display: block;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  font-family: var(--font-heading);

  &:focus {
    outline: none;
    color: var(--border-color-light-grey-1);
    color: var(--border-color-grey);
  }
`;

export const Button = styled.button`
  background-color: #ffa45c;
  color: white;
  padding: 1.3rem;
  border: 0;
  width: ${(props) => props.width || '100%'};
  cursor: pointer;
`;

export const AttentionButton = styled(Button)`
  animation: ${fadeIn} 1s ease-in-out infinite;
`;

export const InputField = styled.input`
  color: var(--border-color-grey);
  border: 1px solid var(--border-color-light-grey);
  height: 4rem;
  width: 100%;
  font-weight: 200;
  display: block;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  font-family: var(--font-heading);

  &:focus {
    outline: none;
    color: var(--border-color-light-grey-1);
    color: var(--border-color-grey);
  }
`;
export const TextArea = styled.textarea`
  color: var(--border-color-grey);
  border: 1px solid var(--border-color-light-grey);
  font-family: var(--font-heading);
  height: 10rem;
  width: 100%;
  font-weight: 200;
  display: block;
  margin-bottom: 0.5rem;
  padding: 0.5rem;

  &:focus {
    outline: none;
    border: 1px solid var(--border-color-light-grey-1);
    color: var(--border-color-grey);
  }
`;

export const SpinnerOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  background-color: rgba(15, 15, 15, 0.1);
`;

export const SpinnerIcon = styled.div`
  height: 5rem;
  width: 5rem;
  border: 3px solid rgba(192, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
