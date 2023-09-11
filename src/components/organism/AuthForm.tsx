import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
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
    <ScrollView style={styles.container} justify-content="flex-start">
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
