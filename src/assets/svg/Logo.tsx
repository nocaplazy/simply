import styled from 'styled-components';

interface PropsType {
  margin?: string;
}

export const Logo = ({ margin }: PropsType) => (
  <_Wrapper
    margin={margin}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
  >
    <rect
      x="5"
      y="5"
      width="90"
      height="90"
      rx="45"
      fill="white"
      stroke="black"
      stroke-width="10"
    />
    <path
      d="M57.4375 41.75H68.875C68.8125 32.9688 61.9688 27.125 51.125 27.125C40.5 27.125 32.9375 32.875 33 41.4375C32.9688 48.4375 37.8438 52.375 45.8125 54.125L50.375 55.125C55.4062 56.2188 57.2812 57.5 57.3125 59.6875C57.2812 62.0938 55.0938 63.75 51 63.75C46.2812 63.75 43.375 61.5312 43.1875 57.3125H31.8125C31.9062 68.4688 39.5 73.5312 51.1875 73.5625C62.625 73.5312 69.4375 68.5625 69.5 59.6875C69.4375 52.7188 65.0938 48 55.375 45.9375L51.625 45.0625C47.4062 44.1875 45.2812 42.9062 45.375 40.5625C45.4062 38.4688 47.2188 36.9062 51.125 36.9375C55.1875 36.9062 57.1875 38.7188 57.4375 41.75Z"
      fill="black"
    />
  </_Wrapper>
);

const _Wrapper = styled.svg<{ margin: string }>`
  margin: ${({ margin }) => margin};
`;
