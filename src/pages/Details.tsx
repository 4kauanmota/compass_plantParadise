import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

import AddToCart from "../components/molecules/AddToCart";
import IncDecControl from "../components/molecules/IncDecControl";
import SubTitle from "../components/atoms/SubTitle";
import { colors, fonts } from "../theme";
import { useEffect, useState } from "react";
import Plant from "../models/Plant";
import { fetchPlantById } from "../api/plantsApi";

const Details = ({ route }: { route: any }) => {
  const [plant, setPlant] = useState<Plant>();

  useEffect(() => {
    const loadPlant = async () => {
      const plantId = route.params.id;
      const fetchedPlant = await fetchPlantById(plantId);
      setPlant(fetchedPlant);
    };

    loadPlant();
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
                <IncDecControl style={styles.incDecControl} />
              </View>
            </View>

            <View style={styles.description}>
              <Text style={styles.descriptionText}>{plant?.description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <AddToCart style={styles.addToCart} />
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

export default Details;
