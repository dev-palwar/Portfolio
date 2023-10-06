const animations = {
  fade: {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
      transition: { ease: "easeOut", duration: 1 },
    },
  },
  bar: {
    initial: {
      width: "0%",
    },
    whileInView: {
      width: "100%",
    },
  },
  h1: {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  },
};

export { animations };
