import styled from 'styled-components';
import { allergysTable } from './constants';

export const SettingModalAllergy = () => {
  return (
    <_Allergy>
      {allergysTable.map((allergy) => (
        <div>{allergy}</div>
      ))}
    </_Allergy>
  );
};

const _Allergy = styled.div`
  border: 2px solid ${({ theme }) => theme.color.gray7};
  padding: 10px;
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin:0 20px;
`;
