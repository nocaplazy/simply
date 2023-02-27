import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';

interface PropsType {
  children: React.ReactNode;
  closeModal: () => void;
}

export function ModalWrapper({ children, closeModal }: PropsType) {
  return (
    <_Background>
      <OutsideClickHandler onOutsideClick={closeModal}>
        {children}
      </OutsideClickHandler>
    </_Background>
  );
}

const _Background = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
