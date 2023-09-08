import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PressArea from "../atoms/PressArea";
import { colors, shadow } from "../../theme";

type FavoriteButtonType = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  iconSize?: number;
  iconActive: any;
  iconDisable: any;
};

const AnimatedIconButton = ({
  onPress,
  style,
  iconSize,
  iconActive,
  iconDisable,
}: FavoriteButtonType) => {
  const state = useSharedValue(0);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(state.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: state.value,
        },
      ],
      opacity: state.value,
    };
  });

  return (
    <PressArea
      onPress={() => {
        onPress();
        return (state.value = withSpring(state.value ? 0 : 1));
      }}
      style={[styles.button, style, shadow.main]}
    >
      <Animated.View style={[StyleSheet.absoluteFill, outlineStyle]}>
        <MaterialCommunityIcons
          name={iconDisable.icon}
          size={iconSize ?? 16}
          color={iconDisable.color}
          style={styles.icon}
        />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <MaterialCommunityIcons
          name={iconActive.icon}
          size={iconSize ?? 16}
          color={iconActive.color}
          style={styles.icon}
        />
      </Animated.View>
    </PressArea>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 100,

    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  ////////

  icon: {
    flex: 1,
    width: 30,
    height: 30,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default AnimatedIconButton;
