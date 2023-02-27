import { Row } from '@/apis/cafeterias/res';
import { Breakfast, Dinner, Lunch } from '@/assets';
import styled from 'styled-components';
import { MenuList } from './MenuList';
import { _Text } from '../common/Text';

function ImgCurrnet(MMEAL_SC_NM: '조식' | '중식' | '석식') {
  switch (MMEAL_SC_NM) {
    case '조식':
      return <Breakfast />;
    case '중식':
      return <Lunch />;
    case '석식':
      return <Dinner />;
  }
}

interface PropsType {
  menuList: Row;
}

export const CafeteriaItem = ({ menuList }: PropsType) => {
  return (
    <_Wrapper>
      <_Time>
        <div>{ImgCurrnet(menuList.MMEAL_SC_NM as any)}</div>
        <_Text margin="5px 0 0 0">{menuList.MMEAL_SC_NM}</_Text>
      </_Time>
      <MenuList menuList={menuList.DDISH_NM.split('<br/>')} />
    </_Wrapper>
  );
};

const _Time = styled.div`
  margin: 0 30px;
`;

const _Wrapper = styled.article`
  display: flex;
  align-items: center;
  width: 500px;
  height: 200px;
  border: 2px solid ${({ theme }) => theme.color.gray9};
  border-radius: 6px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 97.87%
  );
`;
