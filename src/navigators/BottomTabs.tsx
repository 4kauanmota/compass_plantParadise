import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Cart from "../pages/User/Cart";
import Favorites from "../pages/User/Favorites";
import { colors } from "../theme";
import TabBarItem from "../components/atoms/TabBarItem";
import usePlantsStore from "../store/Plant/PlantStore";
import { View } from "react-native";

export type RootTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabs = () => {
  const { cartPlants } = usePlantsStore();

  const CartIcon = (color: any) => {
    if (cartPlants && cartPlants?.length === 0) {
      return (
        <TabBarItem
          icon="shopping-outline"
          color={color.color}
          size={30}
          title="Cart"
        />
      );
    }
    return (
      <View>
        <TabBarItem
          icon="shopping-outline"
          color={color.color}
          size={30}
          title="Cart"
        />
        <View
          style={{
            backgroundColor: "#FF9900BA",
            width: 10,
            height: 10,
            borderRadius: 5,
            position: "absolute",
            top: 0,
            right: 6,
          }}
        ></View>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
        },
        tabBarInactiveTintColor: colors.font.strong,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarItem
              icon="home-outline"
              color={color}
              size={30}
              title="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarItem
              icon="heart-outline"
              color={color}
              size={30}
              title="Favorites"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => <CartIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
