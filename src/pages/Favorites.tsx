import { Button, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigators/StackNavigation";
import NavBar from "../components/molecules/NavBar";
import SubTitle from "../components/atoms/SubTitle";
import VirtualizedList from "../components/atoms/VirtualizedList";
import ListCardList from "../components/organism/ListCardList";
import Plant from "../models/Plant";
import { colors } from "../theme";

type FavoritesType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const Favorites = ({ navigation }: FavoritesType) => {
  const p = new Plant(
    "1",
    "Plant",
    2000,
    "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
  );

  const p2 = new Plant(
    "2",
    "Plant",
    2000,
    "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
  );

  const p3 = new Plant(
    "3",
    "Plant",
    2000,
    "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
  );

  const p4 = new Plant(
    "4",
    "Plant",
    2000,
    "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
  );

  navigation.setOptions({
    header: () => <NavBar left={<SubTitle>Favorites</SubTitle>} />,
  });

  return (
    <VirtualizedList style={styles.container}>
      <ListCardList plants={[p, p2, p3, p4]} />
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
