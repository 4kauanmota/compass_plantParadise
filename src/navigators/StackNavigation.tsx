import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Auth from "../pages/Auth";
import Details from "../pages/Details";
import BottomTabs from "./BottomTabs";

export type RootStackParamList = {
  Auth: undefined;
  Tabs: undefined;
  Details: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
