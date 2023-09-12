import { View, Text, Image } from "react-native";
import { BaseToast, ErrorToast } from "react-native-toast-message";
import { colors, fonts } from "../theme";

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
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
        source={require("../../assets/img/sucess2.gif")}
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
};

export default toastConfig;
