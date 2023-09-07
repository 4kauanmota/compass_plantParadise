import { Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigators/StackNavigation";
import PressArea from "../components/atoms/PressArea";

type HomeType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const Home = ({ navigation }: HomeType) => {
  return (
    <>
      <PressArea onPress={() => navigation.navigate("Details", { id: 0 })}>
        <Text>Details</Text>
      </PressArea>
    </>
  );
};

export default Home;
