import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./src/navigators/StackNavigation";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins400: require("./assets/font/Poppins-Regular.ttf"),
    Poppins500: require("./assets/font/Poppins-Medium.ttf"),
    Poppins600: require("./assets/font/Poppins-SemiBold.ttf"),
    Poppins700: require("./assets/font/Poppins-Black.ttf"),
    SourceSansPro400: require("./assets/font/SourceSansPro-Regular.ttf"),
    SourceSansPro600: require("./assets/font/SourceSansPro-SemiBold.ttf"),
    SourceSansPro700: require("./assets/font/SourceSansPro-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
