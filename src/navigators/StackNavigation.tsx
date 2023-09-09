import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Auth from "../pages/Auth";
import Details from "../pages/Details";
import BottomTabs from "./BottomTabs";
import { colors, fonts } from "../theme";
import NavBar from "../components/molecules/NavBar";
import SubTitle from "../components/atoms/SubTitle";
import AnimatedIconButton from "../components/molecules/AnimatedIconButton";

export type RootStackParamList = {
  Auth: undefined;
  Tabs: undefined;
  Details: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: colors.background } }}
    >
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          header: ({ navigation }) => (
            <NavBar
              left={
                <AnimatedIconButton
                  onPress={() => navigation.goBack()}
                  iconSize={26}
                  iconActive={{
                    icon: "chevron-left",
                    color: colors.font.strong,
                  }}
                  iconDisable={{
                    icon: "chevron-left",
                    color: colors.font.strong,
                  }}
                  style={{ transform: [{ translateY: -4 }] }}
                  shadowOn={false}
                />
              }
              center={
                <SubTitle
                  textStyle={{ fontFamily: fonts.main[600], fontSize: 14 }}
                >
                  Details
                </SubTitle>
              }
              right={
                <AnimatedIconButton
                  onPress={() => null}
                  iconSize={26}
                  iconActive={{
                    icon: "heart",
                    color: colors.primary,
                  }}
                  iconDisable={{
                    icon: "heart-outline",
                    color: colors.font.strong,
                  }}
                  style={{ transform: [{ translateY: -4 }] }}
                  shadowOn={false}
                />
              }
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
