export const titleAnim = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,

    transition: { ease: "easeOut", duration: 0.4, delay: 1.35 },
  },
};

export const titleAnimScroll = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,

    transition: { ease: "easeOut", duration: 0.4, delay: 0.1 },
  },
};

export const mainAnim = {
  initial: { opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.3, delay: 1.25 },
  },
};

export const mainAnimNotFirstLoad = {
  initial: { opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.3, delay: 0.3 },
  },
};

export const fadeSubtitle = {
  initial: { opacity: 0, x: -15 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, type: "easeIn" },
  },
  exit: {
    x: -20,
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.25 },
  },
};
