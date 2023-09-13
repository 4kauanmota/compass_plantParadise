import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

import AddToCart from "../components/molecules/AddToCart";
import SubTitle from "../components/atoms/SubTitle";
import { colors, fonts, shadow } from "../theme";
import { useEffect, useLayoutEffect, useState } from "react";
import Plant from "../models/Plant";
import { fetchPlantById } from "../api/plantsApi";
import DetailsPageBoilerPlate from "../components/molecules/DetailsPageBoilerplate";
import NavBar from "../components/molecules/NavBar";
import AnimatedIconButton from "../components/molecules/AnimatedIconButton";
import usePlantsStore from "../store/PlantStore";
import ShowDetails from "../components/molecules/ShowDetails";

const Details = ({ navigation, route }: { navigation: any; route: any }) => {
  const [plant, setPlant] = useState<Plant>();

  useEffect(() => {
    const loadPlant = async () => {
      const plantId = route.params.id;
      colors;
      const fetchedPlant = await fetchPlantById(plantId);
      setTimeout(() => {
        setPlant(fetchedPlant);
      }, 500);
    };

    loadPlant();
  }, []);

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
          right={
            <AnimatedIconButton
              onPress={() => null}
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
              initialState={false}
            />
          }
        />
      ),
    });
  }, []);

  return (
    <>
      {plant ? (
        <ShowDetails plant={plant} navigation={navigation} />
      ) : (
        <>
          <DetailsPageBoilerPlate />
          <AddToCart style={styles.addToCart} onPress={() => null} />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  addToCart: {
    flex: 1,
    width: "100%",
    height: 92,

    position: "absolute",
    bottom: 0,
  },
});

export default Details;
