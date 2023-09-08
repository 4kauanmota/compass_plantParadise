import { View, StyleSheet, FlatList } from "react-native";

import Plant from "../../models/Plant";
import ListCard from "../molecules/ListCard";

type ListCardListType = {
  plants: Plant[];
};

const ListCardList = ({ plants }: ListCardListType) => {
  return (
    <>
      <FlatList
        data={plants}
        renderItem={({ item }) => <ListCard plant={item} />}
        keyExtractor={(item) => item.Id}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default ListCardList;
