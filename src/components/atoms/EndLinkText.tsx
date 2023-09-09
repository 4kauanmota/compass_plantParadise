import { StyleSheet, Text, View } from "react-native";
import PressArea from "./PressArea";
import { colors, fonts } from "../../theme";

type EndLinkTextType = {
  text: string;
  link: string;
  onPress: () => void;
};

const EndLinkText = ({ text, link, onPress }: EndLinkTextType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <PressArea onPress={onPress}>
        <Text style={styles.link}>{link}</Text>
      </PressArea>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",

    marginTop: 8,
  },

  text: {
    fontFamily: fonts.secondary[400],
  },

  link: {
    fontFamily: fonts.secondary[700],
    color: colors.primary,
    paddingLeft: 4,
  },
});

export default EndLinkText;
