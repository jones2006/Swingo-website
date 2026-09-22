// lib/colors.ts or components/utils/colors.ts

export const colors = {
  brand: {
    primary: "#566BE8",
    navbg: "#131B28",
    hover: "#fffff",
    glow: "#536DE84D",
    light: "#7889F0",
    background: "#0B121D",
    card: "#121826",
    bgcard: "#1A213C",
  },
} as const;

export type ColorType = typeof colors;

// Helper function to return inline styles or hex codes
export const getColor = (path: "primary" | "hover" | "light" = "primary") => {
  return colors.brand[path];
};
