import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";

export type RootTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
