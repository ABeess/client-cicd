interface IResponsive {
  sm: number;
  md: number;
  lg: number;
}

export const pxToRem = (value: number): string => {
  return `${value / 16}rem`;
};

export const responsiveFontSizes = ({ sm, md, lg }: IResponsive) => {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
};
