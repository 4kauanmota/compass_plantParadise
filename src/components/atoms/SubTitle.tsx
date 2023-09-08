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

    fontFamily: fonts.main[600],
    fontSize: 24,
  },
});

export default SubTitle;
