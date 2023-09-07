import { View, StyleSheet, FlatList } from "react-native";

import Plant from "../../models/Plant";
import LargeCard from "../molecules/LargeCard";
import SubTitle from "../atoms/SubTitle";

type LargeCardListType = {
  children: string;
  plants: Plant[];
};

const LargeCardList = ({ children, plants }: LargeCardListType) => {
  return (
    <View style={styles.container}>
      <SubTitle style={styles.subTitle} textStyle={styles.subTitleText}>
        {children}
      </SubTitle>

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

  subTitle: {
    flex: 1,
    paddingVertical: 20,
  },

  subTitleText: {
    fontSize: 16,
    height: "100%",
    textAlignVertical: "center",
  },

  ////////

  list: {
    flex: 1,
    marginRight: 24,
    gap: 20,
  },
});

export default LargeCardList;
