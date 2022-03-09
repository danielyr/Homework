export const mainWrapAnim = {
  initial: { opacity: 0, x: -300 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.375 },
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: {
      duration: 0.3,
    },
  },
};

export const fadeAnim = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.325 },
  },
};

export const loaderAnim = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: { duration: 0.4, type: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.3,
    },
  },
};
