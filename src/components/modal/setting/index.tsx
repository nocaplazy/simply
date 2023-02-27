import { Close } from '@/assets';
import { ModalWrapper } from '@/layouts/wrapper/Modal';
import { SchoolState } from '@/store/SchoolState';
import { localStorgeClear } from '@/utils/storge';
import { Toast } from '@/utils/toast';
import { useState } from 'react';
import OutSideClickHandler from 'react-outside-click-handler';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Button } from '../../common/Button';
import { SettingModalAllergy } from './Allergy';
import { SettingModalDarkModeBtn } from './DarkModeBtn';

interface PropsType {
  closeModal: () => void;
}

export const SettingModal = ({ closeModal }: PropsType) => {
  const { school, gradeClass } = useRecoilValue(SchoolState);
  const navigate = useNavigate();

  const ResetInfo = () => {
    localStorgeClear();
    Toast('회원정보가 초기화되었습니다.', 'success');
    navigate('/school');
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <_Content>
        <_School>
          {school.SCHUL_NM} {gradeClass.grade}학년 {gradeClass.class}반
        </_School>
        <SettingModalDarkModeBtn />
        <Button onClick={closeModal}>
          <Close />
        </Button>
        <SettingModalAllergy />
        <Button onClick={ResetInfo}>학교 초기화</Button>
      </_Content>
    </ModalWrapper>
  );
};
const _School = styled.div`
  ${({ theme }) => theme.font.Title2};
`;

const _Content = styled.div`
  width: 600px;
  height: 500px;
  background-color: ${({ theme }) => theme.color.gray1};
  border-radius: 6px;
  padding: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  box-shadow: 0px 2px 20px 4px rgba(0, 0, 0, 0.16);
`;
