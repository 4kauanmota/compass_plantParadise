import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigators/StackNavigation";
import NavBar from "../../components/molecules/NavBar";
import SubTitle from "../../components/atoms/SubTitle";
import VirtualizedList from "../../components/atoms/VirtualizedList";
import ListCardList from "../../components/organism/ListCardList";
import { colors } from "../../theme";
import GoToCheckout from "../../components/molecules/GoToCheckout";
import usePlantsStore from "../../store/Plant/PlantStore";

type CartType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const Cart = ({ navigation }: CartType) => {
  const { cartPlants } = usePlantsStore();

  useEffect(() => {
    navigation.setOptions({
      header: () => <NavBar left={<SubTitle>Cart</SubTitle>} />,
    });
  }, []);

  return (
    <>
      <VirtualizedList style={styles.container}>
        <ListCardList plants={cartPlants} action={""} />
      </VirtualizedList>

      <GoToCheckout plants={cartPlants} />
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
