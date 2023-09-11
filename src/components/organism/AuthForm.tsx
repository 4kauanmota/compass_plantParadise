import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

import Input from "../molecules/Input";
import { colors, fonts } from "../../theme";
import TextButton from "../molecules/TextButton";
import EndLinkText from "../atoms/EndLinkText";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";

type FormType = {
  information: string;
  type: string;
  onSubmit: any;
  user: any;
  setUser: any;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Form = ({ type, onSubmit, user, setUser, navigation }: FormType) => {
  const inputHandler = (identifier?: string, value?: string) => {
    if (identifier) {
      const newUser = user;
      newUser[identifier].value = value;
      newUser[identifier].errors = [];
      setUser({ ...newUser });
    } else {
      const newUser = user;
      setUser({ ...newUser });
    }
  };

  return (
    <ScrollView style={styles.container} justify-content="flex-start">
      <View style={styles.informations}>
        <Image
          style={styles.image}
          source={require("../../../assets/img/logo.png")}
        />
      </View>

      <View style={styles.inputs}>
        {Object.keys(user).map((key) => {
          return (
            <View key={Math.random().toString()}>
              {user[key].errors.length ? (
                <Text style={styles.errorMessage}>
                  {`${key.toUpperCase()}: ` + user[key].errors.join(" | ")}
                </Text>
              ) : (
                <Text style={styles.label}>{`${key.toUpperCase()}:`}</Text>
              )}
              <Input
                placeholder={`Type your ${key}`}
                config={{
                  value: user[key].value,
                  onChangeText: inputHandler.bind(this, key),
                }}
                isValid={user[key].errors.length === 0 ? true : false}
              />
            </View>
          );
        })}

        {type === "Sign in" ? (
          <Text style={styles.forgetPassword}>Forget your password?</Text>
        ) : null}
      </View>

      <View style={styles.actions}>
        <TextButton
          style={styles.actionButton}
          onPress={() => onSubmit(inputHandler)}
        >
          {type}
        </TextButton>

        {type === "Sign up" ? (
          <EndLinkText
            text="Already have an account?"
            link="Sign in"
            onPress={() => navigation.navigate("SignIn")}
          />
        ) : (
          <EndLinkText
            text="Don't have an account?"
            link="Sign up"
            onPress={() => navigation.navigate("SignUp")}
          />
        )}
      </View>

      <View style={styles.footer}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /////////

  informations: {
    alignItems: "center",
    marginTop: 16,
  },

  image: {
    width: 100,
    height: 100,
  },

  ////////

  inputs: {
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  errorMessage: {
    color: colors.error,
    fontFamily: fonts.main[400],
    fontSize: 13,
    transform: [{ translateY: 7 }],
  },

  label: {
    color: colors.font.light,
    fontFamily: fonts.main[400],
    fontSize: 13,
    transform: [{ translateY: 7 }],
  },

  forgetPassword: {
    color: colors.font.light,
    fontFamily: fonts.main[400],
    fontSize: 12,
    textAlign: "right",
  },

  ////////

  actions: {
    height: 75,
    marginTop: 16,
    paddingHorizontal: 24,
  },

  actionButton: {
    flex: 1,
  },

  ////////

  footer: {
    padding: 8,
  },
});

export default Form;
