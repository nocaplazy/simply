import { Row } from '@/apis/school/res';
import { localStorgeSetItem } from '@/utils/storge';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const SchoolBtn = ({ row }: { row: Row }) => {
  const {
    SCHUL_NM,
    ATPT_OFCDC_SC_CODE,
    SD_SCHUL_CODE,
    ENG_SCHUL_NM,
    ATPT_OFCDC_SC_NM,
  } = row;
  const navigate = useNavigate();

  const onSubmitNext = (
    SCHUL_NM: string,
    ATPT_OFCDC_SC_CODE: string,
    SD_SCHUL_CODE: string
  ) => {
    localStorgeSetItem('school', {
      SCHUL_NM,
      ATPT_OFCDC_SC_CODE,
      SD_SCHUL_CODE,
    });
    navigate('/');
  };

  return (
    <_SchoolBtn
      onClick={() => onSubmitNext(SCHUL_NM, ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE)}
    >
      <div>{SCHUL_NM}</div>
      <div>{ENG_SCHUL_NM}</div>
      <div>{ATPT_OFCDC_SC_NM}</div>
    </_SchoolBtn>
  );
};

const _SchoolBtn = styled.button`
  width: 400px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  background-color: ${({ theme }) => theme.color.gray1};
  border-radius: 7px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 14px;
`;
