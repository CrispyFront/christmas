export const StartButtonEffect = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
    scale: {
      type: "spring",
      damping: 7,
      stiffness: 80,
      restDelta: 0.001,
    },
  },
};
