import { StyleSheet } from "react-native";

export const colors = {
  primary: "#418B64",
  background: "#ffffff",
  font: {
    strong: "#000000",
    light: "",
  },
};

export const button = StyleSheet.create({
  main: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    gap: 16,

    backgroundColor: "#0f0",
    borderRadius: 8,
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
