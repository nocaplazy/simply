export const color = {
  gray1: '#ffffff',
  gray2: '#f9f9f9',
  gray3: '#eeeeee',
  gray4: '#dddddd',
  gray5: '#999999',
  gray6: '#555555',
  gray7: '#343434',
  gray8: '#121212',
  gray9: '#000000',
  errorLighten2: '#fff0f0',
  errorLighten1: '#ffd3d3',
  error: '#FF4646',
  errorDarken1: '#c23535',
  errorDarken2: '#852424',
} as const;

export type keyOfColor = keyof typeof color;
