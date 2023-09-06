import { Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigators/StackNavigation";

type CartType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const Cart = ({ navigation }: CartType) => {
  return (
    <>
      <Button
        title="Details"
        onPress={() => navigation.navigate("Details", { id: 0 })}
      />
    </>
  );
};

export default Cart;
