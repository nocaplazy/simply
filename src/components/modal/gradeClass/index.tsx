import { Arrow } from '@/assets';
import { Button } from '@/components/common/Button';
import { QuantityInput } from '@/components/common/Input';
import { ModalWrapper } from '@/layouts/wrapper/Modal';
import { SchoolState } from '@/store/SchoolState';
import { localStorgeGetItem, localStorgeSetItem } from '@/utils/storge';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { Toast } from '@/utils/toast';

interface PropsType {
  closeModal: () => {};
}

export const GradeClassModal = ({ closeModal }: PropsType) => {
  const [gradeClass, setGradeClass] = useState({
    grade: 1,
    class: 1,
  });

  const navigate = useNavigate();

  const [school, setSchool] = useRecoilState(SchoolState);

  const onSubmitNext = () => {
    localStorgeSetItem('gradeClass', gradeClass);
    setSchool({
      school: localStorgeGetItem('school'),
      gradeClass: localStorgeGetItem('gradeClass'),
    });
    Toast('환영합니다', 'success');
    navigate('/');
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <QuantityInput
        placeholder="학년"
        state={gradeClass}
        setState={setGradeClass}
        name="grade"
      />
      <QuantityInput
        placeholder="반"
        state={gradeClass}
        setState={setGradeClass}
        name="class"
      />
      <Button
        onClick={onSubmitNext}
        color="gray1"
        withIcon={{ Icon: <Arrow />, direction: 'right' }}
      >
        continue
      </Button>
    </ModalWrapper>
  );
};
