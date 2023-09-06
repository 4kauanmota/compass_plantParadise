import { Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigators/StackNavigation";

type FavoritesType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};

const Favorites = ({ navigation }: FavoritesType) => {
  return (
    <>
      <Button
        title="Details"
        onPress={() => navigation.navigate("Details", { id: 0 })}
      />
    </>
  );
};

export default Favorites;
