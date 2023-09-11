import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from "react-native";
import { colors } from "../../theme";

type NavBarType = {
  left?: any;
  center?: any;
  right?: any;
  style?: StyleProp<ViewStyle>;
};

const NavBar = ({ left, center, right, style }: NavBarType) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
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

  left: {},

  center: {},

  right: {},
});

export default NavBar;
