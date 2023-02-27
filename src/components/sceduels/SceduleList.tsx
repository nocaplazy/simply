import { useScedulesQuery } from '@/hooks/Query';
import useScedules from '@/hooks/useScedules';
import { DateState } from '@/store/DateState';
import { SchoolState } from '@/store/SchoolState';
import { MondayDate } from '@/utils/date';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

export const SceduleList = () => {
  const { currentDate } = useRecoilValue(DateState);
  const { mon, fri } = MondayDate(currentDate);
  const {
    school: { ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE },
    gradeClass,
  } = useRecoilValue(SchoolState);
  const { data: schedulesList } = useScedulesQuery({
    ATPT_OFCDC_SC_CODE,
    SD_SCHUL_CODE,
    mon,
    fri,
    GRADE: gradeClass.grade,
    CLASS: gradeClass.class,
  });
  const { SliceScedules } = useScedules();
  return (
    <_Wrapper>
      {schedulesList &&
        SliceScedules(schedulesList).map((schdule) => {
          return (
            <_SubjectWrapper>
              {schdule.map((subject) => (
                <_Subject>{subject}</_Subject>
              ))}
            </_SubjectWrapper>
          );
        })}
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 2px solid ${({ theme }) => theme.color.gray9};
  border-radius: 6px;
  text-align: center;
  flex-grow: 1;
  background: linear-gradient(
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 97.87%
  );
`;

const _SubjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 40px;
`;

const _Subject = styled.div`
  ${({ theme }) => theme.font.Body1};
`;
