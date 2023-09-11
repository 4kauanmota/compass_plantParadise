import { View, Image, StyleSheet, Text } from "react-native";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import Input from "../molecules/Input";
import SubTitle from "../atoms/SubTitle";
import { colors, fonts } from "../../theme";
import TextButton from "../molecules/TextButton";
import EndLinkText from "../atoms/EndLinkText";
import { RootStackParamList } from "../../navigators/StackNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import User from "../../models/User";
import { FIREBASE_AUTH } from "../../services/firebaseConfig";

type FormType = {
  information: string;
  type: string;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Form = ({ information, type, navigation }: FormType) => {
  const [user, setUser] = useState<User>(new User());
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const auth = FIREBASE_AUTH;

  const userHandler = (identifier: string, value: string) => {
    setUser((act) => {
      const newUser = { ...act, [identifier]: value };
      return newUser as User;
    });
  };

  const passwordHandler = (password: string) => {
    setPasswordConfirm(password);
  };

  const signIn = async () => {
    try {
      const resp = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      setTimeout(() => {
        navigation.navigate("Tabs");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async () => {
    console.log(user);

    try {
      const resp = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      await updateProfile(auth.currentUser!, {
        displayName: user.name,
        photoURL: user.image,
      });

      setTimeout(() => {
        navigation.navigate("Tabs");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.informations}>
        <Image
          style={styles.image}
          source={require("../../../assets/img/logo.png")}
        />
        <SubTitle textStyle={styles.subTitle}>{information}</SubTitle>
      </View>

      <View style={styles.inputs}>
        <Input
          placeholder="Email"
          config={{
            value: user.email,
            onChangeText: userHandler.bind(this, "email"),
          }}
        />

        {type === "Sign up" ? (
          <>
            <Input
              placeholder="Name"
              config={{
                value: user.name,
                onChangeText: userHandler.bind(this, "name"),
              }}
            />
          </>
        ) : null}

        <View>
          <Input
            placeholder="Password"
            config={{
              value: user.password,
              onChangeText: userHandler.bind(this, "password"),
            }}
          />
          {type === "Sign in" ? (
            <Text style={styles.forgetPassword}>Forget your password?</Text>
          ) : null}

          {user.password !== "" ? (
            <Input
              placeholder="Password confirmation"
              config={{
                value: passwordConfirm,
                onChangeText: passwordHandler,
              }}
            />
          ) : null}
        </View>
      </View>

      <View style={styles.actions}>
        {type === "Sign up" ? (
          <>
            <TextButton style={styles.actionButton} onPress={signUp}>
              {type}
            </TextButton>

            <EndLinkText
              text="Already have an account?"
              link="Sign in"
              onPress={() => navigation.navigate("SignIn")}
            />
          </>
        ) : (
          <>
            <TextButton style={styles.actionButton} onPress={signIn}>
              {type}
            </TextButton>

            <EndLinkText
              text="Don't have an account?"
              link="Sign up"
              onPress={() => navigation.navigate("SignUp")}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },

  /////////

  informations: {
    alignItems: "center",
  },

  image: {
    width: 100,
    height: 100,
  },

  subTitle: {
    color: colors.primary,
    fontSize: 25,
    marginBottom: 8,
  },

  ////////

  inputs: {
    justifyContent: "center",
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
  },

  actionButton: {},
});

export default Form;
