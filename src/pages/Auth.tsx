import { Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigators/StackNavigation";

type AuthType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Auth">;
};

const Auth = ({ navigation }: AuthType) => {
  return (
    <>
      <Button title="Home" onPress={() => navigation.navigate("Tabs")} />
    </>
  );
};

export default Auth;
