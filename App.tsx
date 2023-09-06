import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./src/navigators/StackNavigation";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/font/Poppins-Regular.ttf"),
    SourceSansPro: require("./assets/font/SourceSansPro-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
