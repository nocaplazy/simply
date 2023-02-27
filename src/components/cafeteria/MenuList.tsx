import styled from 'styled-components';

interface PropsType {
  menuList: string[];
}

export const MenuList = ({ menuList }: PropsType) => {
  return (
    <_Wrapper>
      {menuList.map((menu, idx) => (
        <_Menu key={idx}>{menu}</_Menu>
      ))}
    </_Wrapper>
  );
};

const _Menu = styled.div`
  ${({ theme }) => theme.font.Body2};
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
