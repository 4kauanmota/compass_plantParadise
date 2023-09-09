import { View, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../molecules/Input";
import SubTitle from "../atoms/SubTitle";
import { colors, fonts } from "../../theme";
import TextButton from "../molecules/TextButton";
import EndLinkText from "../atoms/EndLinkText";
import { RootStackParamList } from "../../navigators/StackNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type FormType = {
  information: string;
  type: string;
  onSubmit: () => void;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Form = ({ information, type, onSubmit, navigation }: FormType) => {
  return (
    <View style={styles.container}>
      <View style={styles.informations}>
        <Image
          style={styles.image}
          source={require("../../../assets/img/logo.png")}
        />
        <SubTitle textStyle={styles.subTitle}>{information}</SubTitle>
      </View>

      <View style={styles.inputs}>
        {type === "Sign up" ? <Input placeholder="Name" /> : null}

        <Input placeholder="Email" />

        <View>
          <Input placeholder="Password" />
          <Text style={styles.forgetPassword}>Forget your password?</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TextButton style={styles.actionButton} onPress={onSubmit}>
          {type}
        </TextButton>
        {type === "Sign up" ? (
          <EndLinkText
            text="Already have an account?"
            link="Sign in"
            onPress={() => navigation.navigate("SignIn")}
          />
        ) : (
          <EndLinkText
            text="Don't have an account?"
            link="Sign up"
            onPress={() => navigation.navigate("SignUp")}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /////////

  informations: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  image: {
    width: 100,
    height: 100,
  },

  subTitle: {
    color: colors.primary,
    fontSize: 25,
  },

  ////////

  inputs: {
    flex: 1.5,
    justifyContent: "center",
  },

  forgetPassword: {
    color: colors.font.light,
    fontFamily: fonts.main[400],
    fontSize: 12,
    textAlign: "right",
  },

  ////////

  actions: {
    flex: 1,
  },

  actionButton: {
    flex: 0.3,
  },
});

export default Form;