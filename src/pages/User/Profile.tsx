import { Image, View, Text, StyleSheet, FlatList } from "react-native";
import VirtualizedList from "../../components/atoms/VirtualizedList";
import useUserStore from "../../store/UserStore";
import SubTitle from "../../components/atoms/SubTitle";
import TextButton from "../../components/molecules/TextButton";
import { colors, fonts } from "../../theme";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigation";
import Purchases from "../../components/organism/PurchaseCardList";
import PurchaseCardList from "../../components/organism/PurchaseCardList";

type ProfileType = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Profile = ({ navigation }: ProfileType) => {
  const { currentUser, removeCurrentUser, purchases } = useUserStore();

  const image = currentUser?.image
    ? { uri: currentUser?.image }
    : require("../../../assets/img/userImageBoilerplate.png");

  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <View style={styles.userArea}>
          <Image style={styles.image} source={image} />

          <View style={styles.userData}>
            <SubTitle>{currentUser?.name}</SubTitle>
            <Text style={styles.email}>{currentUser?.email}</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <TextButton
            textStyle={styles.actionButtonsText}
            onPress={() => navigation.navigate("ProfileEdit")}
          >
            Edit
          </TextButton>
          <TextButton
            textStyle={styles.actionButtonsText}
            onPress={() => removeCurrentUser()}
          >
            Sign out
          </TextButton>
        </View>
      </View>

      <FlatList
        data={purchases}
        renderItem={({ item }) => <PurchaseCardList purchases={item} />}
        keyExtractor={() => Math.random().toString()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<></>}
        style={styles.list}
      />
    </View>
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
    marginBottom: 14,
  },

  image: {
    width: 79,
    height: 79,

    borderRadius: 40,
    borderColor: colors.font.strong,
    borderWidth: 1,
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

  ////////

  list: {
    flex: 1,
  },
});

export default Profile;
