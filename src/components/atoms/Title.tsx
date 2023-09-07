import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { fonts } from "../../theme";

type TitleType = {
  children: any;
  style?: StyleProp<ViewStyle>;
};

const Title = ({ children, style }: TitleType) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    height: "100%",
    textAlign: "left",
    textAlignVertical: "center",

    fontFamily: fonts.main,
    fontSize: 50,
    fontWeight: "bold",
    lineHeight: 50,
  },
});

export default Title;
