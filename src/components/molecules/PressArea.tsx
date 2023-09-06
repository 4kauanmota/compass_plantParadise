import {
  View,
  Pressable,
  StyleSheet,
  Platform,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { pressEffect } from "../../theme";

type PressAreaType = {
  children: any;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

const PressArea = ({ children, onPress, style }: PressAreaType) => {
  config(style);

  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={onPress}
        style={
          Platform.OS === "ios"
            ? ({ pressed }) => [pressed && pressEffect.ios, styles.pressArea]
            : [styles.pressArea]
        }
        android_ripple={pressEffect.android}
      >
        {children}
      </Pressable>
    </View>
  );
};

function config(style: any) {
  if (style) {
    styles.pressArea.borderRadius = style.borderRadius;
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },

  pressArea: {
    borderRadius: 0,
  },
});

export default PressArea;
