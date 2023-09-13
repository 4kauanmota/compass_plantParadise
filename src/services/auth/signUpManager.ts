import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ISignUp from "../../models/ISignUp";
import { RootStackParamList } from "../../navigators/StackNavigation";
import User from "../../models/User";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Toast from "react-native-toast-message";

const signUpManager = async (
  user: ISignUp,
  navigation: NativeStackNavigationProp<RootStackParamList>,
  setCurrentUser: (currentUser: User) => void
) => {
  const auth = FIREBASE_AUTH;

  try {
    await createUserWithEmailAndPassword(
      auth,
      user.email.value,
      user.password.value
    );

    await updateProfile(auth.currentUser!, {
      displayName: user.name.value,
    });

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
      text1: "Sign up sucessful",
    });
  } catch (err) {
    Toast.show({
      type: "failed",
      text1: "This email isn't avaible",
    });
    console.log(err);
  }
};

export default signUpManager;
