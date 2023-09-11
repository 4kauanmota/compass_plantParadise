import { TextInput, View, StyleSheet } from "react-native";

import { colors, fonts } from "../../theme";

type InputType = {
  placeholder?: string;
  config?: any;
  isValid?: any;
};

const Input = ({ placeholder, config, isValid = true }: InputType) => {
  return (
    <View style={isValid ? styles.container : [styles.container, styles.error]}>
      <TextInput style={styles.input} placeholder={placeholder} {...config} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    marginVertical: 8,

    borderWidth: 2,
    borderColor: colors.font.light + "aa",
    borderRadius: 10,
  },

  error: {
    borderColor: colors.error,
  },

  input: {
    fontSize: 18,
    fontFamily: fonts.secondary[400],
    textAlignVertical: "center",
  },
});

export default Input;
