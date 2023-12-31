import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigators/StackNavigation";
import Title from "../../components/atoms/Title";
import { fonts } from "../../theme";
import TextButton from "../../components/molecules/TextButton";

type AuthType = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Auth">;
};

const Auth = ({ navigation }: AuthType) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../../../assets/img/HomeBackground.png")}
        />
      </View>

      <View style={styles.main}>
        <View style={styles.text}>
          <Title style={styles.title}>Plant Paradise</Title>
          <Text style={styles.description}>
            Find your favorite plants and help the environment
          </Text>
        </View>

        <View
          style={
            windowWidth > windowHeight
              ? [styles.actions, { flexDirection: "row" }]
              : styles.actions
          }
        >
          <TextButton onPress={() => navigation.navigate("SignIn")}>
            Sign In
          </TextButton>

          <TextButton onPress={() => navigation.navigate("SignUp")}>
            Sign Up
          </TextButton>
        </View>
      </View>

      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },

  ////////

  header: {
    flex: 6,
    width: "100%",
    height: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  ////////

  main: {
    flex: 5,
    width: "100%",
    paddingHorizontal: "5%",
  },

  text: {
    flex: 4,
    paddingRight: "25%",
  },

  title: {
    flex: 4,
  },

  description: {
    flex: 2,
    fontFamily: fonts.main[400],
    fontSize: 16,
    textAlignVertical: "top",
    lineHeight: 20,
  },

  actions: {
    flex: 2,
    gap: 10,
    justifyContent: "flex-start",
  },

  ////////

  footer: {
    flex: 0.5,
  },
});

export default Auth;
