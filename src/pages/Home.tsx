import { Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigators/StackNavigation";

type HomeType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const Home = ({ navigation }: HomeType) => {
  return (
    <>
      <Button
        title="Details"
        onPress={() => navigation.navigate("Details", { id: 0 })}
      />
    </>
  );
};

export default Home;
