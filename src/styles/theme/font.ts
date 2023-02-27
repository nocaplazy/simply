const fontTransFile = (size: number, weight: number) => {
  return `
        font-weight: ${weight};
        font-size: ${size}px;
    `;
};

export const font = {
  Heading1: fontTransFile(24, 900),
  Heading2: fontTransFile(17, 900),
  Heading3: fontTransFile(14, 900),
  Heading4: fontTransFile(13, 900),
  Title1: fontTransFile(23, 900),
  Title2: fontTransFile(19, 600),
  Title3: fontTransFile(16, 500),
  Title4: fontTransFile(15, 900),
  Title5: fontTransFile(14, 900),
  Body1: fontTransFile(16, 400),
  Body2: fontTransFile(14, 400),
  Body3: fontTransFile(13, 900),
  Body4: fontTransFile(12, 900),
};
