import { View, StyleSheet, Image, Text, Platform } from "react-native";

import Plant from "../../models/Plant";
import { colors, fonts, shadow } from "../../theme";
import usePlantsStore from "../../store/PlantStore";
import AnimatedIconButton from "./AnimatedIconButton";

type ListCardType = {
  plant: Plant;
};

const ListCard = ({ plant }: ListCardType) => {
  const { unfavoritePlant } = usePlantsStore();

  const favoritePlantAction = () => {
    unfavoritePlant(plant.id);
  };

  return (
    <View style={[styles.container, shadow.main, { marginVertical: 8 }]}>
      <View style={[styles.container]}>
        <View style={styles.preview}>
          <Image style={styles.image} source={{ uri: plant.image }} />
        </View>

        <View style={styles.details}>
          <View style={styles.description}>
            <Text style={styles.name}>{plant.title}</Text>
            <Text style={styles.price}>${plant.price}</Text>
          </View>

          <View style={styles.action}>
            <AnimatedIconButton
              onPress={() => favoritePlantAction()}
              style={styles.favoriteButton}
              iconSize={20}
              iconActive={{ icon: "heart", color: colors.primary }}
              iconDisable={{ icon: "heart-outline", color: colors.font.strong }}
              initialState={true}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 72,
    flexDirection: "row",

    backgroundColor: colors.secondary,
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

  ////////

  details: {
    flex: 2,
    padding: 7,
    flexDirection: "row",
  },

  ////////

  description: {
    flex: 14,
  },

  name: {
    fontSize: 14,
    fontFamily: fonts.main[500],
  },

  price: {
    fontSize: 14,
    fontFamily: fonts.main[600],
  },

  action: {
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-end",

    marginRight: 5,
  },

  favoriteButton: {
    width: 40,
    height: 40,
    position: "absolute",
  },
});

export default ListCard;
