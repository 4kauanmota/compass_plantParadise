import { View, StyleSheet, FlatList } from "react-native";

import Plant from "../../models/Plant";
import { colors, shadow } from "../../theme";
import TinyCard from "../molecules/TinyCard";
import SubTitle from "../atoms/SubTitle";

type TinyCardListType = {
  plants: Plant[];
};

const TinyCardList = ({ plants }: TinyCardListType) => {
  return (
    <FlatList
      data={plants}
      renderItem={({ item }) => <TinyCard plant={item} />}
      keyExtractor={(item) => item.Id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={<View style={{ width: 24 }}></View>}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
  },
});

export default TinyCardList;
