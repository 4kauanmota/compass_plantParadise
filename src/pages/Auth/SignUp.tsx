import { View, StyleSheet } from "react-native";

import Form from "../../components/organism/Form";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";

type SignUpType = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignUp = ({ navigation }: SignUpType) => {
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
