import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import AnimatedIconButton from "./AnimatedIconButton";
import { colors, fonts } from "../../theme";

const IncDecControl = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseButton = () => {
    if (quantity > 1) setQuantity((act) => --act);
  };

  const increaseButton = () => {
    setQuantity((act) => ++act);
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        {quantity > 1 ? (
          <AnimatedIconButton
            onPress={decreaseButton}
            style={styles.decreaseButton}
            iconLib="ionicons"
            iconSize={20}
            iconActive={{ icon: "remove", color: colors.primary }}
            iconDisable={{ icon: "remove", color: colors.primary }}
          />
        ) : (
          <AnimatedIconButton
            onPress={decreaseButton}
            style={styles.deleteButton}
            iconSize={20}
            iconActive={{ icon: "delete-outline", color: colors.error }}
            iconDisable={{ icon: "delete-outline", color: colors.error }}
          />
        )}
      </View>

      <Text style={styles.quantity}>{quantity}</Text>

      <View style={styles.button}>
        <AnimatedIconButton
          onPress={increaseButton}
          style={styles.increaseButton}
          iconSize={20}
          iconActive={{ icon: "plus", color: colors.background }}
          iconDisable={{ icon: "plus", color: colors.background }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  ////////

  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  ////////

  decreaseButton: {
    flex: 1,
    position: "absolute",
    alignItems: "center",

    backgroundColor: colors.background,

    borderWidth: 2,
    borderColor: colors.primary,
  },

  deleteButton: {
    flex: 1,
    position: "absolute",
    alignItems: "center",

    backgroundColor: colors.background,

    borderWidth: 2,
    borderColor: colors.error,
  },

  quantity: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",

    fontSize: 14,
    fontFamily: fonts.main[600],
    lineHeight: 24,
  },

  increaseButton: {
    flex: 1,
    backgroundColor: colors.primary,
    position: "absolute",
  },
});

export default IncDecControl;