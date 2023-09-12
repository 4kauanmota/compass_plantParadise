import { useState } from "react";
import { StyleSheet, View } from "react-native";

import AuthForm from "../../components/organism/AuthForm";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";
import ISignIn from "../../models/ISignIn";
import passwordValidator from "../../services/validator/passwordValidator";
import emailValidator from "../../services/validator/emailValidator";
import signInManager from "../../services/auth/signInManager";
import useUserStore from "../../store/UserStore";

type SignIn = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignIn = ({ navigation }: SignIn) => {
  const { setCurrentUser } = useUserStore();
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
      signInManager(user, navigation, setCurrentUser);
    }

    inputHandler();
  };

  return (
    <View style={styles.container}>
      <AuthForm
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
