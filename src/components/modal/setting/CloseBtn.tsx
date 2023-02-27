import styled from 'styled-components';
import { Close } from '@/assets';

interface PropsType {
  closeModal: () => void;
}

export const SettingModalCloseBtn = ({ closeModal }: PropsType) => (
  <CloseWrapper onClick={closeModal}>
    <button>
      <Close />
    </button>
  </CloseWrapper>
);

const CloseWrapper = styled.div`
  position: fixed;
  > button {
    position: absolute;
    top: -190px;
    left: 432px;
    > svg {
      cursor: pointer;
    }
  }
`;
