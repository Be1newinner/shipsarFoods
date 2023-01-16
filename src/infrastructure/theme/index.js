import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const userTheme = {
  ...DefaultTheme,
  myOwnProperty: true,

  // Custom Properties
  // Colors
  colors: {
    ...DefaultTheme.colors,
    myOwnColor: "#BADA55",
    componentBg: "#fff",
    primary: "#fc5656",
    primaryLight: "#e46262ab",
    appBackground: "#9992",
  },
  // Sizes and Spacing
  sizes: {
    xxl: "2px",
    xl: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xlg: "20px",
    xxlg: "24px",
    huge: "28px",
    xhuge: "32px",
    xxhuge: "36px",
    statusbarHeight: 75,
  },
};

export default userTheme;
