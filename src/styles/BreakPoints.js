export const breakpoints = {
  sm: 460, //small mobile devices
  md: 768, //tablets and bigger mobiles
  lg: 1280, //laptops and bigger tablets
  xl: 1920, //big screens
};

export const device = {
  sm: `@media(max-width: ${breakpoints.sm}px)`,
  md: `@media(max-width: ${breakpoints.md}px)`,
  lg: `@media(max-width: ${breakpoints.lg}px)`,
  xl: `@media(max-width: ${breakpoints.xl}px)`,
};
