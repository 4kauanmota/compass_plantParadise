import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

import IncDecControl from "./IncDecControl";
import SubTitle from "../atoms/SubTitle";
import { colors, fonts, shadow } from "../../theme";
import Plant from "../../models/Plant";
import usePlantsStore from "../../store/Plant/PlantStore";
import { useLayoutEffect } from "react";
import AnimatedIconButton from "./AnimatedIconButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";
import NavBar from "./NavBar";
import AddToCart from "./AddToCart";

type ShowDetailsType = {
  plant: Plant;
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const ShowDetails = ({ plant, navigation }: ShowDetailsType) => {
  const {
    favoritedPlants,
    addFavoritePlant,
    removeFavoritePlant,
    cartPlants,
    addCartPlant,
  } = usePlantsStore();

  const favoritePlantAction = () => {
    if (!favoritedPlants?.includes(plant!)) addFavoritePlant(plant!);
    else removeFavoritePlant(plant!.id);
  };

  const isFavorited = favoritedPlants
    ?.map((act) => {
      if (act.id === plant!.id) return true;
    })
    .includes(true) as boolean;

  const FavoriteButton = () => (
    <AnimatedIconButton
      onPress={() => favoritePlantAction()}
      iconSize={26}
      iconActive={{
        icon: "heart",
        color: colors.primary,
      }}
      iconDisable={{
        icon: "heart-outline",
        color: colors.font.strong,
      }}
      style={{ transform: [{ translateY: -4 }] }}
      shadowOn={false}
      initialState={isFavorited}
    />
  );

  const IncDecButtons = () => (
    <IncDecControl plant={plant} style={styles.incDecControl} />
  );

  const isInCart = cartPlants
    ?.map((act) => {
      if (act.id === plant.id) return true;
    })
    .includes(true) as boolean;

  const cartButton = !isInCart ? "Add to cart" : "Remove to cart";

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <NavBar
          style={shadow.main}
          left={
            <AnimatedIconButton
              onPress={() => navigation.goBack()}
              iconSize={26}
              iconActive={{
                icon: "chevron-left",
                color: colors.font.strong,
              }}
              iconDisable={{
                icon: "chevron-left",
                color: colors.font.strong,
              }}
              style={{ transform: [{ translateY: -4 }] }}
              shadowOn={false}
            />
          }
          center={
            <SubTitle textStyle={{ fontFamily: fonts.main[600], fontSize: 14 }}>
              Details
            </SubTitle>
          }
          right={<FavoriteButton />}
        />
      ),
    });
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.preview}>
            <Image style={styles.image} source={{ uri: plant?.image }} />
          </View>

          <View style={styles.main}>
            <View style={styles.buyArea}>
              <Text style={styles.category}>{plant?.category}</Text>
              <SubTitle style={styles.subTitle}>{plant?.title}</SubTitle>

              <View style={styles.priceControl}>
                <Text style={styles.price}>${plant?.price}</Text>
                <IncDecButtons />
              </View>
            </View>

            <View style={styles.description}>
              <Text style={styles.descriptionText}>{plant?.description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <AddToCart
        style={styles.addToCart}
        onPress={() => addCartPlant(plant)}
        text={cartButton}
        price={plant.price * plant.quantity}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ////////

  preview: {
    flex: 2.5,
    width: "100%",
  },

  image: {
    width: "100%",
    height: 247,
  },

  ////////

  main: {
    flex: 3,
    paddingHorizontal: 24,
  },

  buyArea: {
    flex: 1.5,
  },

  category: {
    flex: 6,
    textAlignVertical: "center",

    color: colors.font.light,

    paddingTop: 14,
    paddingBottom: 6,
  },

  subTitle: {
    flex: 7,
    paddingBottom: 8,
  },

  priceControl: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  price: {
    flex: 1,
    textAlignVertical: "center",

    fontFamily: fonts.main[600],
    fontSize: 20,
  },

  incDecControl: {
    flex: 0.5,
  },

  description: {
    flex: 1.5,
    paddingTop: 24,
    paddingBottom: 100,
  },

  descriptionText: {
    fontFamily: fonts.main[400],
    fontSize: 14,
    color: colors.font.light,
  },

  ////////

  addToCart: {
    flex: 1,
    width: "100%",
    height: 92,

    position: "absolute",
    bottom: 0,
  },
});

export default ShowDetails;
