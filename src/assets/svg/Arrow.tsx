import { directionType } from '@/common';
import styled from 'styled-components';

interface PropsType {
  direction?: directionType;
}

export const Arrow = (props: PropsType) => (
  <_Wrapper {...props} width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M4.4375 1.45L8.65 5.65C8.7 5.7 8.7355 5.75417 8.7565 5.8125C8.7775 5.87083 8.78783 5.93333 8.7875 6C8.7875 6.06667 8.77717 6.12917 8.7565 6.1875C8.73583 6.24583 8.70033 6.3 8.65 6.35L4.4375 10.5625C4.32083 10.6792 4.175 10.7375 4 10.7375C3.825 10.7375 3.675 10.675 3.55 10.55C3.425 10.425 3.3625 10.2792 3.3625 10.1125C3.3625 9.94583 3.425 9.8 3.55 9.675L7.225 6L3.55 2.325C3.43333 2.20833 3.375 2.0645 3.375 1.8935C3.375 1.7225 3.4375 1.57467 3.5625 1.45C3.6875 1.325 3.83333 1.2625 4 1.2625C4.16667 1.2625 4.3125 1.325 4.4375 1.45Z"
      fill="white"
    />
  </_Wrapper>
);

const _Wrapper = styled.svg<PropsType>`
  transform: rotate(
    ${({ direction }) => {
      switch (direction) {
        case 'left':
          return '0.5';
        case 'bottom':
          return '0.75';
        case 'top':
          return '0.25';
      }
    }}turn
  );
`;
