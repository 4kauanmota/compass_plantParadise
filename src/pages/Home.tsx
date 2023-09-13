import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigators/StackNavigation";
import { colors } from "../theme";
import TinyCardList from "../components/organism/TinyCardList";
import LargeCardList from "../components/organism/LargeCardList";
import VirtualizedList from "../components/atoms/VirtualizedList";
import NavBar from "../components/molecules/NavBar";
import SubTitle from "../components/atoms/SubTitle";
import { fetchItemPlantsCard, fetchPopularPlantsCard } from "../api/plantsApi";
import useUserStore from "../store/UserStore";
import AnimatedIconButton from "../components/molecules/AnimatedIconButton";
import Plant from "../models/Plant";

type HomeType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const Home = ({ navigation }: HomeType) => {
  const [popularPlants, setPopularPlants] = useState<Plant[]>();
  const [itemPlants, setItemPlants] = useState<Plant[]>();
  const { currentUser } = useUserStore();

  useEffect(() => {
    const loadPlants = async () => {
      const fetchedPopularPlants: Plant[] = await fetchPopularPlantsCard();
      const fetchedItemPlants: Plant[] = await fetchItemPlantsCard();

      setPopularPlants(fetchedPopularPlants);
      setItemPlants(fetchedItemPlants);
    };

    loadPlants();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <NavBar
          left={<SubTitle>{currentUser?.name}</SubTitle>}
          right={
            <AnimatedIconButton
              iconSize={30}
              iconActive={{
                icon: "account-circle-outline",
                color: colors.font.strong,
              }}
              iconDisable={{
                icon: "account-circle-outline",
                color: colors.font.strong,
              }}
              onPress={() => navigation.navigate("Profile")}
              shadowOn={false}
            />
          }
        />
      ),
    });
  }, [currentUser]);

  return (
    <VirtualizedList style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TinyCardList plants={popularPlants}>Most popular</TinyCardList>
        </View>

        <View style={styles.main}>
          <LargeCardList plants={itemPlants} />
        </View>
      </View>
    </VirtualizedList>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },

  ////////

  header: {
    flex: 2,
  },

  ////////

  main: {
    flex: 5,
    paddingLeft: 24,
  },
});

export default Home;
