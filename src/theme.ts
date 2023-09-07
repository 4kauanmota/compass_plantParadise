import { StyleSheet, Platform } from "react-native";

export const colors = {
  primary: "#418B64",
  background: "#ffffff",
  font: {
    strong: "#000000",
    light: "",
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

export const fonts = {
  main: "Poppins",
  secondary: "SourceSansPro",
};

export const pressEffect = {
  android: {
    color: colors.background,
    borderless: false,
  },

  ios: {
    opacity: 0.8,
  },
};
