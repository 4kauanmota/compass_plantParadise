import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Plant from "../../models/Plant";
import { colors, fonts, shadow } from "../../theme";
import usePlantsStore from "../../store/Plant/PlantStore";
import AnimatedIconButton from "./AnimatedIconButton";
import IncDecControl from "./IncDecControl";
import PressArea from "../atoms/PressArea";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";

type ListCardType = {
  plant: Plant;
  action?: string;
};

const ListCard = ({ plant, action }: ListCardType) => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  const { removeFavoritePlant } = usePlantsStore();

  const favoritePlantAction = () => {
    removeFavoritePlant(plant.id);
  };

  return (
    <PressArea
      style={[{ flex: 1, borderRadius: 8, marginVertical: 8 }, shadow.main]}
      onPress={() => navigation.navigate("Details", { plant: plant })}
    >
      <View style={styles.container}>
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
              {action === "favoriteButton" ? (
                <AnimatedIconButton
                  onPress={() => favoritePlantAction()}
                  style={styles.favoriteButton}
                  iconSize={20}
                  iconActive={{ icon: "heart", color: colors.primary }}
                  iconDisable={{
                    icon: "heart-outline",
                    color: colors.font.strong,
                  }}
                  initialState={true}
                />
              ) : (
                <IncDecControl plant={plant} />
              )}
            </View>
          </View>
        </View>
      </View>
    </PressArea>
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
    flex: 5,
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
