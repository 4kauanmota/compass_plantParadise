import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { RootStackParamList } from "../navigators/StackNavigation";
import { colors } from "../theme";
import Plant from "../models/Plant";
import TinyCardList from "../components/organism/TinyCardList";
import LargeCardList from "../components/organism/LargeCardList";
import VirtualizedList from "../components/atoms/VirtualizedList";
import NavBar from "../components/molecules/NavBar";
import SubTitle from "../components/atoms/SubTitle";

type HomeType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const Home = ({ navigation }: HomeType) => {
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

  navigation.setOptions({
    header: () => (
      <NavBar
        left={<SubTitle>Hi, John</SubTitle>}
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

  return (
    <VirtualizedList style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TinyCardList plants={[p, p2, p3]}>Most popular</TinyCardList>
        </View>

        <View style={styles.main}>
          <LargeCardList plants={[p, p2, p3]}>All Indoor Outdoor</LargeCardList>
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
