import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { RootStackParamList } from "../navigators/StackNavigation";
import { colors } from "../theme";
import TinyCardList from "../components/organism/TinyCardList";
import LargeCardList from "../components/organism/LargeCardList";
import VirtualizedList from "../components/atoms/VirtualizedList";
import NavBar from "../components/molecules/NavBar";
import SubTitle from "../components/atoms/SubTitle";
import { fetchItemPlantsCard, fetchPopularPlantsCard } from "../api/plantsApi";
import useUserStore from "../store/UserStore";

type HomeType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const Home = ({ navigation }: HomeType) => {
  const [popularPlants, setPopularPlants] = useState<IPlantsCard[]>();
  const [itemPlants, setItemPlants] = useState<IPlantsCard[]>();
  const { currentUser } = useUserStore();

  useEffect(() => {
    const loadPlants = async () => {
      const fetchedPopularPlants: IPlantsCard[] =
        await fetchPopularPlantsCard();
      const fetchedItemPlants: IPlantsCard[] = await fetchItemPlantsCard();

      setPopularPlants(fetchedPopularPlants);
      setItemPlants(fetchedItemPlants);
    };

    loadPlants();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <NavBar
          left={<SubTitle>{currentUser.name}</SubTitle>}
          right={
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={30}
              color="black"
            />
          }
        />
      ),
    });
  }, []);

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
