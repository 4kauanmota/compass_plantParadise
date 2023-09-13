import { View, Text, Image } from "react-native";
import { BaseToast, ErrorToast } from "react-native-toast-message";
import { colors, fonts } from "../theme";

const toastConfig = {
  auth: ({ text1 }: { text1: string }) => (
    <View
      style={{
        height: 60,
        width: "60%",
        backgroundColor: colors.secondary,
        borderRadius: 16,
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Image
        style={{ width: 60, height: 60 }}
        source={require("../../assets/img/sucess.gif")}
      />
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: fonts.main[500],
            fontSize: 16,
            color: colors.primary,
          }}
        >
          {text1}
        </Text>
      </View>
    </View>
  ),
  failed: ({ text1 }: { text1: string }) => (
    <View
      style={{
        height: 60,
        width: "75%",
        backgroundColor: colors.error,
        borderRadius: 16,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 40, height: 40 }}
        source={require("../../assets/img/error.gif")}
      />
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: fonts.main[500],
            fontSize: 16,
            color: "#952323",
          }}
        >
          {text1}
        </Text>
      </View>
    </View>
  ),
};

export default toastConfig;
