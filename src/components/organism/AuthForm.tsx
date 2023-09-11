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
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import User from "../../models/User";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";
import ISignIn from "../../models/ISignIn";

type FormType = {
  information: string;
  type: string;
  onSubmit: any;
  user: any;
  setUser: any;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Form = ({
  information,
  type,
  onSubmit,
  user,
  setUser,
  navigation,
}: FormType) => {
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
    <View style={styles.container}>
      <View style={styles.informations}>
        <Image
          style={styles.image}
          source={require("../../../assets/img/logo.png")}
        />
        <SubTitle textStyle={styles.subTitle}>{information}</SubTitle>
      </View>

      <View style={styles.inputs}>
        {Object.keys(user).map((key) => {
          return (
            <>
              {user[key].errors.length ? (
                <Text style={styles.errorMessage}>
                  {user[key].errors.join(" | ")}
                </Text>
              ) : null}
              <Input
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                config={{
                  value: user[key].value,
                  onChangeText: inputHandler.bind(this, key),
                }}
                isValid={user[key].errors.length === 0 ? true : false}
                key={key}
              />
            </>
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

  errorMessage: {
    color: colors.error,
    fontFamily: fonts.secondary[400],
    fontSize: 11,
  },

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
