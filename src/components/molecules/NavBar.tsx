import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { colors } from "../../theme";

type NavBarType = {
  left?: any;
  center?: any;
  right?: any;
};

const NavBar = ({ left, center, right }: NavBarType) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.left}>{left}</View>
      <View style={styles.center}>{center}</View>
      <View style={styles.right}>{right}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight! + 20,
    paddingBottom: 10,
    paddingHorizontal: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: colors.background,
  },

  left: {
    height: 26,
  },

  center: {},

  right: {},
});

export default NavBar;
