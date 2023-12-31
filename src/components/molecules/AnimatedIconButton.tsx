import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import PressArea from "../atoms/PressArea";
import { colors, shadow } from "../../theme";

type FavoriteButtonType = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  iconLib?: string;
  iconSize?: number;
  iconActive: any;
  iconDisable: any;
  shadowOn?: boolean;
  initialState?: boolean;
};

const AnimatedIconButton = ({
  onPress,
  style,
  iconLib,
  iconSize,
  iconActive,
  iconDisable,
  shadowOn = true,
  initialState = false,
}: FavoriteButtonType) => {
  const state = useSharedValue(initialState ? 1 : 0);

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
        setTimeout(() => onPress(), 1);

        return (state.value = withSpring(state.value ? 0 : 1));
      }}
      style={[styles.button, style, shadowOn ? shadow.main : null]}
    >
      <Animated.View style={[StyleSheet.absoluteFill, outlineStyle]}>
        {iconLib == "ionicons" ? (
          <Ionicons
            name={iconDisable.icon}
            size={iconSize ?? 16}
            color={iconDisable.color}
            style={styles.icon}
          />
        ) : (
          <MaterialCommunityIcons
            name={iconDisable.icon}
            size={iconSize ?? 16}
            color={iconDisable.color}
            style={styles.icon}
          />
        )}
      </Animated.View>

      <Animated.View style={fillStyle}>
        {iconLib == "ionicons" ? (
          <Ionicons
            name={iconActive.icon}
            size={iconSize ?? 16}
            color={iconActive.color}
            style={styles.icon}
          />
        ) : (
          <MaterialCommunityIcons
            name={iconActive.icon}
            size={iconSize ?? 16}
            color={iconActive.color}
            style={styles.icon}
          />
        )}
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
