import { View, StyleSheet, Image, Text, Platform } from "react-native";

import Plant from "../../models/Plant";
import TextButton from "./TextButton";
import { colors, shadow } from "../../theme";

type TinyCardType = {
  plant: Plant;
};

const TinyCard = ({ plant }: TinyCardType) => {
  return (
    <View style={[styles.container, shadow.main]}>
      <View style={[styles.container]}>
        <View style={styles.preview}>
          <Image style={styles.image} source={{ uri: plant.Image }} />
        </View>

        <View style={styles.details}>
          <View style={styles.description}>
            <Text>{plant.Name}</Text>
            <Text>${plant.Price}</Text>
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
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  ////////

  details: {
    flex: 1,
    padding: 8,
  },

  description: {
    flex: 4,
  },

  action: {
    flex: 1,
  },
});

export default TinyCard;
