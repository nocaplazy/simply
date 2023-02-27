import styled from 'styled-components';

export const _Text = styled.div<{ margin?: string; fontSize?: '54px' }>`
  text-align: center;
  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize};
`;
