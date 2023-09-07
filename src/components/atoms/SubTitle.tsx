import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { fonts } from "../../theme";

type SubTitleType = {
  children: any;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const SubTitle = ({ children, style, textStyle }: SubTitleType) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.subTitle, textStyle]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  ////////

  subTitle: {
    textAlign: "left",
    textAlignVertical: "center",

    fontFamily: fonts.main,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SubTitle;
