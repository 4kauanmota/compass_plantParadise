import { View, StyleSheet } from "react-native";

import Form from "../../components/organism/AuthForm";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";

type SignUpType = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignUp = ({ navigation }: SignUpType) => {
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
      <Form
        information="Create account"
        type="Sign up"
        onSubmit={() => navigation.navigate("Details", { id: 0 })}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default SignUp;
