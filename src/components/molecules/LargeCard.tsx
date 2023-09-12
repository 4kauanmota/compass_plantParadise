import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { colors, fonts, shadow } from "../../theme";
import AnimatedIconButton from "./AnimatedIconButton";
import { RootStackParamList } from "../../navigators/StackNavigation";
import PressArea from "../atoms/PressArea";

type LargeCardType = {
  plant: IPlantsCard;
};

const LargeCard = ({ plant }: LargeCardType) => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  return (
    <PressArea
      style={[{ flex: 1, borderRadius: 8 }, shadow.main]}
      onPress={() => navigation.navigate("Details", { id: plant.id })}
    >
      <View style={[styles.container]}>
        <View style={[styles.container]}>
          <View style={styles.preview}>
            <Image style={styles.image} source={{ uri: plant.image }} />
            <AnimatedIconButton
              onPress={() => console.log("oi")}
              style={styles.favoriteButton}
              iconActive={{ icon: "heart", color: colors.primary }}
              iconDisable={{ icon: "heart-outline", color: colors.font.strong }}
            />
          </View>

          <View style={styles.details}>
            <View style={styles.description}>
              <Text style={styles.name}>{plant.title}</Text>
              <Text style={styles.price}>${plant.price}</Text>
            </View>

            <View style={styles.action}>
              <AnimatedIconButton
                onPress={() => null}
                style={styles.buyButton}
                iconActive={{ icon: "shopping", color: colors.background }}
                iconDisable={{
                  icon: "shopping-outline",
                  color: colors.background,
                }}
              />
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
    height: 278,

    backgroundColor: colors.background,
    borderRadius: 8,
  },

  ////////

  preview: {
    flex: 9,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",

    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  favoriteButton: {
    position: "absolute",
    top: 12,
    left: 12,
  },

  ////////

  details: {
    flex: 3,
    paddingLeft: 14,

    flexDirection: "row",
  },

  description: {
    flex: 6,
    justifyContent: "center",
  },

  name: {
    fontFamily: fonts.main[600],
    lineHeight: 24,
  },

  price: {
    fontFamily: fonts.main[400],
    lineHeight: 24,
  },

  action: {
    flex: 1,
    justifyContent: "center",
  },

  buyButton: {
    position: "absolute",
    backgroundColor: colors.primary,
  },
});

export default LargeCard;
