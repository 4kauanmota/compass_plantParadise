import { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigators/StackNavigation";
import Plant from "../../models/Plant";
import NavBar from "../../components/molecules/NavBar";
import SubTitle from "../../components/atoms/SubTitle";
import VirtualizedList from "../../components/atoms/VirtualizedList";
import ListCardList from "../../components/organism/ListCardList";
import { colors } from "../../theme";
import IncDecControl from "../../components/molecules/IncDecControl";
import BuyArea from "../../components/molecules/BuyArea";

type CartType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const Cart = ({ navigation }: CartType) => {
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

  useEffect(() => {
    navigation.setOptions({
      header: () => <NavBar left={<SubTitle>Cart</SubTitle>} />,
    });
  }, []);

  return (
    <>
      <VirtualizedList style={styles.container}>
        <ListCardList
          plants={[p, p2, p3, p4, p, p, p]}
          action={<IncDecControl />}
        />
      </VirtualizedList>

      <BuyArea />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  ////////

  favoriteButton: {
    width: 40,
    height: 40,
    position: "absolute",
  },
});

export default Cart;
