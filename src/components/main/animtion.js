export const mainWrapAnim = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.45 },
  },
  exit: {
    opacity: 0,
    background: "#FFFFF7",
    transition: {
      duration: 0.4,
    },
  },
};

export const slider1 = {
  initial: { x: "-130%", skew: "45deg" },
  animate: {
    x: "100%",
    skew: "0deg",
    borderRadius: "2.5% 0% 0% 0%",
    transition: { ease: "easeOut", duration: 1, delay: 0.1 },
  },
};

export const slider2 = {
  initial: { x: "-130%", skew: "45deg" },
  animate: {
    x: "100%",
    skew: "0deg",
    borderRadius: "5% 0% 0% 0%",
    transition: { ease: "easeOut", duration: 1, delay: 0.3 },
  },
};

export const slider3 = {
  initial: { x: "-130%", skew: "45deg" },
  animate: {
    x: "100%",
    skew: "0deg",
    borderRadius: "10% 0% 0% 0%",
    transition: { ease: "easeOut", duration: 1, delay: 0.5 },
  },
};

export const slider4 = {
  initial: { x: "-130%", skew: "45deg" },
  animate: {
    x: "100%",
    skew: "0deg",
    borderRadius: "12.5% 0% 0% 0%",
    transition: { ease: "easeOut", duration: 1, delay: 0.7 },
  },
};
