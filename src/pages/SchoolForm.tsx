import { useForm } from '@/hooks/useForm';
import { UserFormWrapper } from '@/layouts/wrapper/UserForm';
import { useSchoolQuery } from '@/hooks/Query';
import { Input } from '@/components/common/Input';
import { SchoolBtn } from '@/components/SchoolBtn';
import styled from 'styled-components';

export function SchoolFormPage() {
  const { text, onChangeHandler } = useForm({ ans: '' });
  const { data: schoolList } = useSchoolQuery(text.ans);

  return (
    <UserFormWrapper msg="SIMPLY에 오신 것을 환영합니다.">
      <_Input>
        <Input
          placeholder="ex) 대덕소프트웨어마이스터고등학교"
          onChange={onChangeHandler}
          value={text.ans}
          name={'ans'}
        />
      </_Input>
      <_School>
        {schoolList && schoolList.map((row) => <SchoolBtn row={row} />)}
      </_School>
    </UserFormWrapper>
  );
}

const _Input = styled.div`
  padding: 60px 0;
`;

const _School = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
