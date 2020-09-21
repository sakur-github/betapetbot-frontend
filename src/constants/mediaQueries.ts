const MOBILE_WIDTH: number = 320;
const PHABLET_WIDTH: number = 480;
const TABLET_WIDTH: number = 768;
const DESKTOP_WIDTH: number = 1024;
const LAPTOP_WIDTH: number = 1360;
const HD_WIDTH: number = 1440;
const FULL_HD_WIDTH: number = 1920;

const getMediaQuery = (width: number): string =>
  `@media (min-width: ${width + 1}px)`;

export const MOBILE_MQ = getMediaQuery(MOBILE_WIDTH);
export const PHABLET_MQ = getMediaQuery(PHABLET_WIDTH);
export const TABLET_MQ = getMediaQuery(TABLET_WIDTH);
export const DESKTOP_MQ = getMediaQuery(DESKTOP_WIDTH);
export const LAPTOP_MQ = getMediaQuery(LAPTOP_WIDTH);
export const HD_MQ = getMediaQuery(HD_WIDTH);
export const FULL_HD_MQ = getMediaQuery(FULL_HD_WIDTH);
