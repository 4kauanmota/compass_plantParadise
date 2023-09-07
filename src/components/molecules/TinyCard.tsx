import { View, StyleSheet, Image, Text, Platform } from "react-native";

import Plant from "../../models/Plant";
import TextButton from "./TextButton";
import { colors, fonts, shadow } from "../../theme";
import FavoriteButton from "./FavoriteButton";

type TinyCardType = {
  plant: Plant;
};

const TinyCard = ({ plant }: TinyCardType) => {
  return (
    <View style={[styles.container, shadow.main, { margin: 8 }]}>
      <View style={[styles.container]}>
        <View style={styles.preview}>
          <Image style={styles.image} source={{ uri: plant.Image }} />
          <FavoriteButton
            style={styles.favoriteButton}
            onPress={() => console.log("oi")}
          />
        </View>

        <View style={styles.details}>
          <View style={styles.description}>
            <Text style={styles.name}>{plant.Name}</Text>
            <Text style={styles.price}>${plant.Price}</Text>
          </View>

          <View style={styles.action}>
            <TextButton
              textStyle={{ fontSize: 12 }}
              onPress={() => console.log("hello world")}
            >
              Add to cart
            </TextButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 287,
    flexDirection: "row",

    backgroundColor: colors.background,
    borderRadius: 8,
  },

  ////////

  preview: {
    flex: 1,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  favoriteButton: {
    position: "absolute",
    top: 4,
    left: 4,
  },

  ////////

  details: {
    flex: 1,
    padding: 8,
  },

  description: {
    flex: 4,
  },

  name: {
    fontFamily: fonts.main,
    fontWeight: "500",
  },

  price: {
    fontFamily: fonts.main,
    fontWeight: "bold",
  },

  action: {
    flex: 1,
  },
});

export default TinyCard;
