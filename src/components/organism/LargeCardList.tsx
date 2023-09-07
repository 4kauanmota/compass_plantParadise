import { View, StyleSheet, FlatList } from "react-native";

import Plant from "../../models/Plant";
import LargeCard from "../molecules/LargeCard";
import TextOptions from "../atoms/TextOptions";

type LargeCardListType = {
  children: string;
  plants: Plant[];
};

const LargeCardList = ({ children, plants }: LargeCardListType) => {
  const filterOptions: ITextOptions[] = [
    { text: "All", selected: true },
    { text: "Indoor", selected: false },
    { text: "OutDoor", selected: false },
  ];

  return (
    <View style={styles.container}>
      <TextOptions options={filterOptions} />

      <FlatList
        data={plants}
        renderItem={({ item }) => <LargeCard plant={item} />}
        keyExtractor={(item) => item.Id}
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

  list: {
    flex: 1,
    marginRight: 24,
    gap: 20,
  },
});

export default LargeCardList;
