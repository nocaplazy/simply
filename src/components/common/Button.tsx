import { keyOfColor } from '@/styles/theme/color';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
  onClick?: () => any;
  className?: string;
  color?: keyOfColor;
  withIcon?: {
    Icon: JSX.Element;
    direction?: 'left' | 'right';
  };
}

export const Button = ({
  className,
  children,
  onClick,
  withIcon,
  color,
}: PropsType) => {
  return (
    <_Wrapper color={color} className={className} onClick={onClick}>
      {withIcon && withIcon.direction === 'left' && withIcon.Icon}
      {children}
      {withIcon && withIcon.direction === 'right' && withIcon.Icon}
    </_Wrapper>
  );
};

export const _Wrapper = styled.button<{ color: keyOfColor }>`
  width: 125px;
  height: 36px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 23px;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  border-radius: 50px;
  background: none;
  cursor: pointer;
  color: ${({ color, theme }) => theme.color[color]};
`;

export const _OnlyIconBtn = styled.button`
  background: none;
  border: none;
`;
