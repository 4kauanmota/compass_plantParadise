import { Image, View, Text, StyleSheet } from "react-native";
import VirtualizedList from "../../components/atoms/VirtualizedList";
import useUserStore from "../../store/UserStore";
import SubTitle from "../../components/atoms/SubTitle";
import TextButton from "../../components/molecules/TextButton";
import { colors, fonts } from "../../theme";

const Profile = () => {
  const { currentUser } = useUserStore();

  const image = currentUser?.image
    ? { uri: currentUser?.image }
    : require("../../../assets/img/userImageBoilerplate.png");

  return (
    <VirtualizedList style={styles.container}>
      <View style={styles.information}>
        <View style={styles.userArea}>
          <Image style={styles.image} source={image} />

          <View style={styles.userData}>
            <SubTitle>{currentUser?.name}</SubTitle>
            <Text style={styles.email}>{currentUser?.email}</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <TextButton textStyle={styles.actionButtonsText} onPress={() => null}>
            Edit
          </TextButton>
          <TextButton textStyle={styles.actionButtonsText} onPress={() => null}>
            Sign out
          </TextButton>
        </View>
      </View>
    </VirtualizedList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ////////

  information: {
    height: 171,
    width: "100%",
    padding: 24,

    borderColor: colors.font.light + "77",
    borderBottomWidth: 2,
  },

  ////////

  userArea: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  image: {
    width: 80,
    height: 80,
  },

  userData: {
    paddingLeft: 16,
  },

  email: {
    fontSize: 14,
    fontFamily: fonts.main[400],
    color: colors.font.light,
    transform: [{ translateY: -5 }],
  },

  ////////

  actions: {
    flexDirection: "row",

    height: "30%",
    gap: 8,
  },

  actionButtonsText: {
    fontSize: 20,
  },
});

export default Profile;
