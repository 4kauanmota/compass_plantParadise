import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";

import Form from "../../components/organism/AuthForm";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";
import { FIREBASE_AUTH } from "../../services/firebaseConfig";
import ISignIn from "../../models/ISignIn";
import passwordValidator from "../../services/validator/passwordValidator";
import emailValidator from "../../services/validator/emailValidator";

type SignIn = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignIn = ({ navigation }: SignIn) => {
  const [user, setUser] = useState<ISignIn>({
    email: {
      value: "",
      errors: new Array<string>(),
    },
    password: {
      value: "",
      errors: new Array<string>(),
    },
  });

  const auth = FIREBASE_AUTH;

  const submitHandler = (inputHandler: any) => {
    const userErrors = user;
    userErrors.email.errors = new Array<string>();
    userErrors.password.errors = new Array<string>();

    emailValidator(userErrors.email);
    passwordValidator(userErrors.password);

    setUser(userErrors);
    if (
      user!.email.errors?.length === 0 &&
      user!.password.errors?.length === 0
    ) {
      signIn();
    }

    inputHandler();
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        user!.email.value,
        user!.password.value
      );

      setTimeout(() => {
        navigation.navigate("Tabs");
      }, 2000);

      Toast.show({
        type: "auth",
        text1: "Sign in sucessful",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Form
        information="Welcome back"
        type="Sign in"
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

export default SignIn;
