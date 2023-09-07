import { Text, GestureResponderEvent, StyleSheet } from "react-native";

import PressArea from "../atoms/PressArea";
import { colors, fonts } from "../../theme";

type TextButtonType = {
  children: any;
  onPress: (event: GestureResponderEvent) => void;
};

const TextButton = ({ children, onPress }: TextButtonType) => {
  return (
    <PressArea onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </PressArea>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },

  text: {
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",

    color: colors.background,
    fontFamily: fonts.secondary,
    fontSize: 24,
    fontWeight: "400",
  },
});

export default TextButton;
