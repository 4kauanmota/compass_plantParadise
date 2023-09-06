import { View, Text, StyleSheet } from "react-native";
import { fonts } from "../../theme";

type TitleType = {
  children: any;
};

const Title = ({ children }: TitleType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {children} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: fonts.main,
    fontSize: 50,
    fontWeight: "600",
    lineHeight: 50,
  },
});

export default Title;
