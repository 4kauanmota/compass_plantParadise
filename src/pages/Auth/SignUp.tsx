import { View, StyleSheet } from "react-native";

import Form from "../../components/organism/AuthForm";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";
import { useState } from "react";
import ISignUp from "../../models/ISignUp";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FIREBASE_AUTH } from "../../services/firebaseConfig";
import emailValidator from "../../services/validator/emailValidator";
import passwordValidator from "../../services/validator/passwordValidator";
import nameValidator from "../../services/validator/nameValidator";
import passwordConfirmationValidator from "../../services/validator/passwordConfirmationValidator";

type SignUpType = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignUp = ({ navigation }: SignUpType) => {
  const [user, setUser] = useState<ISignUp>({
    name: {
      value: "",
      errors: new Array<string>(),
    },
    email: {
      value: "",
      errors: new Array<string>(),
    },
    password: {
      value: "",
      errors: new Array<string>(),
    },
    ["password confirmation"]: {
      value: "",
      errors: new Array<string>(),
    },
  });

  const auth = FIREBASE_AUTH;

  const submitHandler = (inputHandler: any) => {
    const userErrors = user;
    userErrors.name.errors = new Array<string>();
    userErrors.email.errors = new Array<string>();
    userErrors.password.errors = new Array<string>();
    userErrors["password confirmation"].errors = new Array<string>();

    nameValidator(userErrors.name);
    emailValidator(userErrors.email);
    passwordValidator(userErrors.password);
    passwordConfirmationValidator(user["password confirmation"], user.password);

    setUser(userErrors);
    if (
      user!.email.errors?.length === 0 &&
      user!.password.errors?.length === 0
    ) {
      signUp();
    }

    inputHandler();
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        user.email.value,
        user.password.value
      );

      await updateProfile(auth.currentUser!, {
        displayName: user.name.value,
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
      <Form
        information="Create account"
        type="Sign up"
        onSubmit={submitHandler}
        user={user}
        setUser={setUser}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignUp;
