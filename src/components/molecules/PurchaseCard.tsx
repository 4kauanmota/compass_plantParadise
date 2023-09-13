import { Image, View, Text, StyleSheet } from "react-native";
import { colors, fonts, shadow } from "../../theme";
import Plant from "../../models/Plant";

type PurchaseCardType = {
  plant: Plant;
};

const PurchaseCard = ({ plant }: PurchaseCardType) => {
  return (
    <View style={[styles.container, shadow.secondary]} key={plant.id}>
      <Image style={styles.image} source={{ uri: plant.image }} />
      <Text style={styles.title}>{plant.title}</Text>
      <View style={styles.information}>
        <View>
          <Text style={styles.price}>${plant.price}</Text>
        </View>
        <Text style={styles.quantity}>{plant.quantity}x</Text>
        <Text style={styles.totalPrice}>${plant.price * plant.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginVertical: 4,

    flexDirection: "row",

    backgroundColor: colors.background,

    borderRadius: 10,
  },

  ////////

  image: {
    width: 50,
    height: 50,

    borderRadius: 10,
  },

  ////////

  information: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },

  title: {
    position: "absolute",
    top: 0,
    left: 72,

    fontFamily: fonts.main[400],
    fontSize: 14,
  },

  price: {
    fontFamily: fonts.main[500],
  },

  quantity: {
    fontFamily: fonts.main[500],
  },

  totalPrice: {
    fontFamily: fonts.main[600],
  },
});

export default PurchaseCard;
