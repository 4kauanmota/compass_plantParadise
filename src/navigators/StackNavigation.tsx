import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Auth from "../pages/Auth/Auth";
import Details from "../pages/Details";
import BottomTabs from "./BottomTabs";
import { colors, fonts, shadow } from "../theme";
import NavBar from "../components/molecules/NavBar";
import SubTitle from "../components/atoms/SubTitle";
import AnimatedIconButton from "../components/molecules/AnimatedIconButton";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import { View } from "react-native";
import useUserStore from "../store/UserStore";
import Profile from "../pages/User/Profile";
import ProfileEdit from "../pages/User/ProfileEdit";

export type RootStackParamList = {
  Auth: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Tabs: undefined;
  Profile: undefined;
  ProfileEdit: undefined;
  Details: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  const { currentUser } = useUserStore();

  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: colors.background } }}
    >
      {currentUser ? (
        <>
          <Stack.Screen
            name="Tabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              header: ({ navigation }) => (
                <NavBar
                  style={shadow.main}
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
                      Profile
                    </SubTitle>
                  }
                  right={<View style={{ width: 26 }}></View>}
                />
              ),
            }}
          />

          <Stack.Screen
            name="ProfileEdit"
            component={ProfileEdit}
            options={{
              header: ({ navigation }) => (
                <NavBar
                  style={shadow.main}
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
                      Profile Edit
                    </SubTitle>
                  }
                  right={<View style={{ width: 26 }}></View>}
                />
              ),
            }}
          />

          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              header: ({ navigation }) => (
                <NavBar
                  style={shadow.main}
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
        </>
      ) : (
        <>
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              header: ({ navigation }) => (
                <NavBar
                  style={shadow.main}
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
                    <SubTitle textStyle={{ fontSize: 14 }}>
                      Welcome back
                    </SubTitle>
                  }
                  right={<View style={{ width: 26 }}></View>}
                />
              ),
            }}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              header: ({ navigation }) => (
                <NavBar
                  style={shadow.main}
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
                    <SubTitle textStyle={{ fontSize: 14 }}>
                      Create account
                    </SubTitle>
                  }
                  right={<View style={{ width: 26 }}></View>}
                />
              ),
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
