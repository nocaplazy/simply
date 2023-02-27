import { useState } from 'react';
import styled, { css } from 'styled-components';

export const SettingModalDarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <_DarkModeBtn>
      <_Light onClick={() => setDarkMode(false)} dark={darkMode}>
        Light
      </_Light>
      <_Dark onClick={() => setDarkMode(true)} dark={darkMode}>
        Dark
      </_Dark>
    </_DarkModeBtn>
  );
};

const _Light = styled.div<{ dark: boolean }>`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.25s;
  ${({ theme }) => theme.font.Body1};
  ${({ dark }) => {
    return (
      !dark &&
      css`
        background: linear-gradient(
            312.9deg,
            rgba(255, 255, 255, 0.3) 4.49%,
            rgba(233, 240, 247, 0.3) 95.45%
          ),
          #e9f0f7;
        box-shadow: inset -4px -4px 10px rgba(255, 255, 255, 0.9),
          inset 4px 4px 10px rgba(138, 155, 189, 0.3);
        border-radius: 60px;
      `
    );
  }}
`;

const _Dark = styled.div<{ dark: boolean }>`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.25s;
  ${({ theme }) => theme.font.Body1};
  ${({ dark }) => {
    return (
      dark &&
      css`
        background: linear-gradient(
            312.9deg,
            rgba(255, 255, 255, 0.3) 4.49%,
            rgba(233, 240, 247, 0.3) 95.45%
          ),
          #e9f0f7;
        box-shadow: inset -4px -4px 10px rgba(255, 255, 255, 0.9),
          inset 4px 4px 10px rgba(138, 155, 189, 0.3);
        border-radius: 60px;
      `
    );
  }}
`;

const _DarkModeBtn = styled.button`
  border: none;
  background-color: none;
  background: none;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  background: linear-gradient(
      312.9deg,
      rgba(255, 255, 255, 0.3) 4.49%,
      rgba(233, 240, 247, 0.3) 95.45%
    ),
    #e9f0f7;
  box-shadow: -4px -4px 10px rgba(255, 255, 255, 0.9),
    4px 4px 10px rgba(138, 155, 189, 0.4);
  border-radius: 60px;
  padding: 5px;
  transition: 0.25s;
`;
