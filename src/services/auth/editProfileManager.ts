import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import Toast from "react-native-toast-message";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import User from "../../models/User";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { RootStackParamList } from "../../navigators/StackNavigation";
import IUser from "../../models/IUser";

const editProfileManager = async (
  user: IUser,
  navigation: NativeStackNavigationProp<RootStackParamList>,
  setCurrentUser: (currentUser: User) => void,
  currentUserEmail: string
) => {
  const auth = FIREBASE_AUTH;

  try {
    await signInWithEmailAndPassword(
      auth,
      currentUserEmail,
      user?.password.value
    );

    await updateProfile(auth.currentUser!, {
      displayName: user.name.value,
      photoURL: user.image.value,
    });

    const authUser = auth.currentUser;

    const registeredUser = new User(
      authUser?.displayName as string,
      authUser?.email as string,
      authUser?.photoURL as string
    );

    setCurrentUser(registeredUser);

    setTimeout(() => {
      navigation.goBack();
    }, 2000);

    Toast.show({
      type: "auth",
      text1: "Update sucessful",
    });
  } catch (err) {
    Toast.show({
      type: "failed",
      text1: "Incorrect password",
    });
    console.log(err);
  }
};

export default editProfileManager;
