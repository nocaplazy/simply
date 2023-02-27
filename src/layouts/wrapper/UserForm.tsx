import { formBackground, Logo } from '@/assets';
import styled from 'styled-components';
import { ReactNode } from 'react';
import { localStorgeSetItem } from '@/utils/storge';
import { FormEvent } from 'react';
import { _Text } from '@/components/common/Text';

const _UserWrapper = styled.div`
  text-align: center;
  height: 100vh;
  background-image: url(${formBackground});
  background-size: cover;
  > div {
    width: 1112px;
    margin: 0 auto;
  }
`;

const _Msg = styled.h1`
  font-size: 54px;
  color: #fff;
`;

interface PropsType {
  children: ReactNode;
  msg: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => any;
}

export const UserFormWrapper = ({ children, msg, onSubmit }: PropsType) => {
  return (
    <_UserWrapper>
      <div>
        {/* <Logo margin="20px 0 0 0" /> */}
        {/* <_Text margin="100px 0 15px 0" fontSize="54px">
        {msg}
      </_Text> */}
        {children}
      </div>
    </_UserWrapper>
  );
};
