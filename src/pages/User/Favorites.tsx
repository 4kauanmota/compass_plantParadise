import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigators/StackNavigation";
import NavBar from "../../components/molecules/NavBar";
import SubTitle from "../../components/atoms/SubTitle";
import VirtualizedList from "../../components/atoms/VirtualizedList";
import ListCardList from "../../components/organism/ListCardList";
import { colors } from "../../theme";
import usePlantsStore from "../../store/PlantStore";

type FavoritesType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const Favorites = ({ navigation }: FavoritesType) => {
  const { favoritedPlants } = usePlantsStore();

  useEffect(() => {
    navigation.setOptions({
      header: () => <NavBar left={<SubTitle>Favorites</SubTitle>} />,
    });
  }, []);

  return (
    <VirtualizedList style={styles.container}>
      <ListCardList plants={favoritedPlants} action={"favoriteButton"} />
    </VirtualizedList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default Favorites;
