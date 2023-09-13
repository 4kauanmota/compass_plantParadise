import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

import TextButton from "./TextButton";
import { colors, fonts, shadow } from "../../theme";
import Plant from "../../models/Plant";

type AddToCartType = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  text: string;
  price: number;
};

const AddToCart = ({ style, onPress, text, price }: AddToCartType) => {
  return (
    <View style={[styles.container, style, shadow.main]}>
      <View style={styles.value}>
        <Text style={styles.title}>Total price</Text>
        <Text style={styles.price}>${price}</Text>
      </View>

      <TextButton
        style={styles.buyButton}
        textStyle={styles.buyText}
        onPress={onPress}
      >
        {text}
      </TextButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingVertical: 8,
    paddingBottom: 8,

    flexDirection: "row",
    alignItems: "center",
  },

  ////////

  value: {
    flex: 1.5,
  },

  title: {
    fontFamily: fonts.main[400],
    fontSize: 12,
  },

  price: {
    fontFamily: fonts.main[700],
    fontSize: 20,
  },

  ////////

  buyButton: {
    flex: 1,
    maxHeight: 48,
  },

  buyText: {
    fontFamily: fonts.secondary[600],
    fontSize: 16,
    lineHeight: 20,
  },
});

export default AddToCart;
