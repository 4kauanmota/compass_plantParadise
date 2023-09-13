import { View } from "react-native";
import ContentLoader from "react-native-easy-content-loader";

const DetailsPageBoilerPlate = () => {
  const Boiletplate: any = ContentLoader;

  return (
    <View>
      <Boiletplate
        active={true}
        tHeight={0}
        tWidth={0}
        pRows={1}
        pWidth={["100%"]}
        pHeight={[247]}
        paragraphStyles={{
          transform: [{ scale: 1.1 }, { translateY: -10 }],
        }}
      />
      <View style={{ paddingHorizontal: 18 }}>
        <Boiletplate
          active={true}
          tHeight={0}
          tWidth={0}
          pRows={3}
          pWidth={[72, 231, "100%"]}
          pHeight={[24, 24, 25]}
          paragraphStyles={{
            transform: [{ translateY: -10 }],
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 18, marginTop: 12 }}>
        <Boiletplate
          active={true}
          tHeight={0}
          tWidth={0}
          pRows={30}
          pWidth={"100%"}
        />
      </View>
    </View>
  );
};

export default DetailsPageBoilerPlate;
