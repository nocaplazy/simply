import { DateState } from '@/store/DateState';
import { SchoolState } from '@/store/SchoolState';
import { ConversionDate } from '@/utils/date';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

export const DateCarouselDate = () => {
  const [dateState, setDateState] = useRecoilState(DateState);
  const { year, month, day, dayOfTheWeek } = ConversionDate(
    dateState.currentDate
  );
  return (
    <_Date>
      {year}년 {month}월 {day}일 {dayOfTheWeek}요일
    </_Date>
  );
};

const _Date = styled.div`
  ${({ theme }) => theme.font.Heading1};
`;
