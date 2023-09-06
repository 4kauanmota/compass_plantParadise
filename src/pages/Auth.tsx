import { Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigators/StackNavigation";
import Title from "../components/atoms/Title";

type AuthType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Auth">;
};

const Auth = ({ navigation }: AuthType) => {
  return (
    <>
      <Title>AUTH</Title>
      <Button title="Home" onPress={() => navigation.navigate("Tabs")} />
    </>
  );
};

export default Auth;
