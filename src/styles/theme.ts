import { DefaultTheme } from "styled-components";

type TFontStyle = {
  fontSize: number;
  fontWeight: number;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string };
    fontStyles: { [key in keyof typeof themeFontStyles]: TFontStyle };
  }
}

const themeColors = {
  background: "#faf6ed",
  fontColor: "#222",
  containerColor: "#FB5",
};

const themeFontStyles = {
  paragraph: {
    fontWeight: 400,
    fontSize: 16,
  },
  heading: {
    fontSize: 32,
    fontWeight: 600,
  },
  title: {
    fontSize: 48,
    fontWeight: 700,
  },
};
const theme: DefaultTheme = {
  colors: themeColors,
  fontStyles: themeFontStyles,
};
export default theme;
