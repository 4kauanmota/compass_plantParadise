import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./src/navigators/StackNavigation";

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
