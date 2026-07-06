import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
};

export const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#eef8f4",
      100: "#d5ede4",
      200: "#aee0cd",
      300: "#7ecbad",
      400: "#4daf8b",
      500: "#2f946f",
      600: "#21775a",
      700: "#1b5f4a",
      800: "#174b3c",
      900: "#123d32"
    },
    accent: {
      500: "#e0a72e",
      600: "#b9801f"
    }
  },
  fonts: {
    heading: "Inter, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif"
  },
  styles: {
    global: {
      body: {
        bg: "brand.50",
        color: "brand.900"
      }
    }
  }
});
