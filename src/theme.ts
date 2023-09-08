import { StyleSheet, Platform } from "react-native";

export const colors = {
  primary: "#418B64",
  secondary: "#ECF8F3",

  error: "#FC7272",

  background: "#ffffff",

  font: {
    strong: "#000000",
    light: "#969595",
  },
};

export const fonts = {
  main: {
    400: "Poppins400",
    500: "Poppins500",
    600: "Poppins600",
  },
  secondary: {
    400: "SourceSansPro400",
    600: "SourceSansPro600",
    700: "SourceSansPro700",
  },
};

export const shadow = StyleSheet.create({
  main: {
    ...Platform.select({
      ios: {
        shadowColor: colors.font.strong,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
});

export const pressEffect = {
  android: {
    color: colors.background,
    borderless: false,
  },

  ios: {
    opacity: 0.8,
  },
};
