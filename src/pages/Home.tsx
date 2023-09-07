import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigators/StackNavigation";
import PressArea from "../components/atoms/PressArea";
import { colors } from "../theme";
import SubTitle from "../components/atoms/SubTitle";
import Plant from "../models/Plant";
import TinyCard from "../components/molecules/TinyCard";
import TinyCardList from "../components/organism/TinyCardList";

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SubTitle style={styles.subTitle} textStyle={styles.subTitleText}>
          Most popular
        </SubTitle>

        <TinyCardList plants={[p, p2, p3]} />
      </View>

      <View style={styles.main}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  ////////

  header: {
    flex: 3.5,
  },

  subTitle: {
    flex: 0.4,
    paddingLeft: 24,
  },

  subTitleText: {
    fontSize: 20,
    height: "100%",
    textAlignVertical: "center",
  },

  ////////

  main: {
    flex: 5,
    paddingLeft: 24,
  },
});

export default Home;
