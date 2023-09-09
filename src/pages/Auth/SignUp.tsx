import { View, StyleSheet } from "react-native";

import Form from "../../components/organism/Form";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Form information="Create account" type="Sign up" />
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
