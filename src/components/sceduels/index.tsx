import styled from 'styled-components';
import { SceduelsDayOfTheWeek } from './DayOfTheWeek';
import { SceduleList } from './SceduleList';

export const Sceduels = () => {
  return (
    <_Wrapper>
      <SceduelsDayOfTheWeek />
      <SceduleList />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 450px;
  height: 650px;
  display: flex;
  flex-direction: column;
`;
