import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

import Input from "../molecules/Input";
import { colors, fonts } from "../../theme";
import TextButton from "../molecules/TextButton";

type ProfileFormType = {
  onSubmit: any;
  user: any;
  setUser: any;
};

const ProfileForm = ({ onSubmit, user, setUser }: ProfileFormType) => {
  const inputHandler = (identifier?: string, value?: string) => {
    if (identifier) {
      const newUser = user;
      newUser[identifier].value = value;
      newUser[identifier].errors = [];
      setUser({ ...newUser });
    } else {
      const newUser = user;
      setUser({ ...newUser });
    }
  };

  const image = user?.image.value
    ? { uri: user?.image.value }
    : require("../../../assets/img/userImageBoilerplate.png");

  return (
    <ScrollView
      style={styles.container}
      justify-content="flex-start"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.informations}>
        <Image style={styles.image} source={image} />
      </View>

      <View style={styles.inputs}>
        {Object.keys(user).map((key) => {
          return (
            <View key={key}>
              {user[key].errors.length ? (
                <Text style={styles.errorMessage}>
                  {`${key.toUpperCase()}: ` + user[key].errors.join(" | ")}
                </Text>
              ) : (
                <Text style={styles.label}>{`${key.toUpperCase()}:`}</Text>
              )}
              <Input
                placeholder={`Type your ${key}`}
                config={{
                  value: user[key].value,
                  onChangeText: inputHandler.bind(this, key),
                }}
                isValid={user[key].errors.length === 0 ? true : false}
              />
            </View>
          );
        })}
      </View>

      <View style={styles.actions}>
        <TextButton
          style={styles.actionButton}
          onPress={() => onSubmit(inputHandler)}
        >
          Save
        </TextButton>
      </View>

      <View style={styles.footer}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /////////

  informations: {
    alignItems: "center",
    marginTop: 16,
  },

  image: {
    width: 100,
    height: 100,

    borderRadius: 50,
    borderColor: colors.font.strong,
    borderWidth: 1,
  },

  ////////

  inputs: {
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  errorMessage: {
    color: colors.error,
    fontFamily: fonts.main[400],
    fontSize: 13,
    transform: [{ translateY: 7 }],
  },

  label: {
    color: colors.font.light,
    fontFamily: fonts.main[400],
    fontSize: 13,
    transform: [{ translateY: 7 }],
  },

  ////////

  actions: {
    height: 55,
    marginTop: 16,
    paddingHorizontal: 24,
  },

  actionButton: {
    flex: 1,
  },

  ////////

  footer: {
    padding: 8,
  },
});

export default ProfileForm;
