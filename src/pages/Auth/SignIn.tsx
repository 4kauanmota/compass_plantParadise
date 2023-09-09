import { StyleSheet, View } from "react-native";

import Form from "../../components/organism/Form";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Form information="Welcome back" type="Sign in" />
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
