import { StyleSheet, View } from "react-native";

import Form from "../../components/organism/AuthForm";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";

type SignIn = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignIn = ({ navigation }: SignIn) => {
  return (
    <View style={styles.container}>
      <Form
        information="Welcome back"
        type="Sign in"
        onSubmit={() => navigation.navigate("Tabs")}
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

export default SignIn;
