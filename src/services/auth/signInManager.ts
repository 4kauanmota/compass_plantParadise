import { signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import User from "../../models/User";
import { FIREBASE_AUTH } from "../firebaseConfig";
import ISignIn from "../../models/ISignIn";
import { RootStackParamList } from "../../navigators/StackNavigation";

const signInManager = async (
  user: ISignIn,
  navigation: NativeStackNavigationProp<RootStackParamList>,
  setCurrentUser: (currentUser: User) => void
) => {
  const auth = FIREBASE_AUTH;

  try {
    await signInWithEmailAndPassword(
      auth,
      user?.email.value,
      user?.password.value
    );

    const authUser = auth.currentUser;

    const registeredUser = new User(
      authUser?.displayName as string,
      authUser?.email as string,
      authUser?.photoURL as string
    );

    setCurrentUser(registeredUser);

    setTimeout(() => {
      navigation.navigate("Tabs");
    }, 2000);

    Toast.show({
      type: "auth",
      text1: "Sign in sucessful",
    });
  } catch (err) {
    Toast.show({
      type: "failed",
      text1: "Authentication failed",
    });
  }
};

export default signInManager;
