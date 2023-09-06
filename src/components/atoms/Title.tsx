import { View, Text, StyleSheet } from "react-native";

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
    fontSize: 50,
    fontWeight: "600",
    lineHeight: 50,
  },
});

export default Title;
