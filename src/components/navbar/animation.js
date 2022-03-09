export const firstSpan = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: {
      type: "easeInOut",
      duration: 1,
      delay: 1,
    },
  },
};

export const secondSpan = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
      delay: 1.2,
    },
  },
};
