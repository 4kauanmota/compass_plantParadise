import { View, Text, StyleSheet } from "react-native";

import TextButton from "./TextButton";
import { colors, fonts } from "../../theme";

const BuyArea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.value}>
        <Text style={styles.title}>Subtotal:</Text>
        <Text style={styles.price}>$30.8</Text>
      </View>

      <TextButton
        style={styles.buyButton}
        textStyle={styles.buyText}
        onPress={() => null}
      >
        Go to checkout
      </TextButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.25,

    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingVertical: 8,
    paddingBottom: 8,

    justifyContent: "space-around",
  },

  ////////

  value: {
    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: colors.secondary,
    padding: 8,

    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 4,
  },

  title: {
    fontFamily: fonts.secondary[400],
    fontSize: 14,
  },

  price: {
    fontFamily: fonts.secondary[700],
    fontSize: 14,
  },

  ////////

  buyButton: {
    maxHeight: 48,
  },

  buyText: {
    fontFamily: fonts.secondary[600],
    fontSize: 16,
    lineHeight: 20,
  },
});

export default BuyArea;
