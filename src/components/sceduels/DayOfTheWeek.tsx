import styled from 'styled-components';

const DayOfTheWeek = ['월', '화', '수', '목', '금'];

export const SceduelsDayOfTheWeek = () => {
  return (
    <_Wrapper>
      {DayOfTheWeek.map((Day) => (
        <div>{Day}</div>
      ))}
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 28px 0;
  ${({ theme }) => theme.font.Title2};
`;
