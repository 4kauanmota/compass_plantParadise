import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
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
  style?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
};

const FavoriteButton = ({ onPress, style }: FavoriteButtonType) => {
  const favorited = useSharedValue(0);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            favorited.value,
            [0, 1],
            [1, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: favorited.value,
        },
      ],
      opacity: favorited.value,
    };
  });

  return (
    <PressArea
      onPress={() => (favorited.value = withSpring(favorited.value ? 0 : 1))}
      style={[styles.button, style, shadow.main]}
    >
      <Animated.View style={[StyleSheet.absoluteFill, outlineStyle]}>
        <MaterialCommunityIcons
          name={"heart-outline"}
          size={18}
          color={colors.font.strong}
        />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <MaterialCommunityIcons
          name={"heart"}
          size={18}
          color={colors.primary}
        />
      </Animated.View>
    </PressArea>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 15,

    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  favorite: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoriteButton;
