import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fonts } from "../../theme";

type TabBarItem = {
  icon: any;
  size: number;
  color: string;
  title: string;
};

const TabBarItem = ({ icon, size, color, title }: TabBarItem) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={size} color={color} />
      <Text style={[styles.title, { color: color }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 23,
  },

  title: {
    fontFamily: fonts.secondary[400],
    fontSize: 14,
    textAlignVertical: "top",
  },
});

export default TabBarItem;
