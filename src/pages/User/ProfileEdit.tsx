import { View, StyleSheet } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";
import { useState } from "react";
import IUser from "../../models/IUser";
import emailValidator from "../../services/validator/emailValidator";
import passwordValidator from "../../services/validator/passwordValidator";
import signInManager from "../../services/auth/signInManager";
import useUserStore from "../../store/UserStore";
import nameValidator from "../../services/validator/nameValidator";
import passwordConfirmationValidator from "../../services/validator/passwordConfirmationValidator";
import ProfileForm from "../../components/organism/ProfileForm";
import editProfileManager from "../../services/auth/editProfileManager";
import imageValidator from "../../services/validator/imageValidator";

type ProfileEditType = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const ProfileEdit = ({ navigation }: ProfileEditType) => {
  const { currentUser, setCurrentUser } = useUserStore();
  const [user, setUser] = useState<IUser>({
    name: {
      value: currentUser?.name ?? "",
      errors: new Array<string>(),
    },
    image: {
      value: currentUser?.image ?? "",
      errors: new Array<string>(),
    },
    password: {
      value: "",
      errors: new Array<string>(),
    },
  });

  const submitHandler = (inputHandler: any) => {
    const userErrors = user;
    userErrors.name.errors = new Array<string>();
    userErrors.image.errors = new Array<string>();
    userErrors.password.errors = new Array<string>();

    nameValidator(userErrors.name);
    imageValidator(userErrors.image);
    passwordValidator(userErrors.password);

    setUser(userErrors);
    if (
      user!.password.errors?.length === 0 &&
      user!.image.errors?.length === 0
    ) {
      editProfileManager(
        user,
        navigation,
        setCurrentUser,
        currentUser?.email ?? ""
      );
    }

    inputHandler();
  };

  return (
    <View style={styles.container}>
      <ProfileForm onSubmit={submitHandler} user={user} setUser={setUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileEdit;
