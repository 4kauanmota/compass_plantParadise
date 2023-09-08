import { View, StyleSheet, FlatList } from "react-native";

import Plant from "../../models/Plant";
import TinyCard from "../molecules/TinyCard";
import SubTitle from "../atoms/SubTitle";

type TinyCardListType = {
  children: string;
  plants: Plant[];
};

const TinyCardList = ({ children, plants }: TinyCardListType) => {
  return (
    <>
      <SubTitle style={styles.subTitle} textStyle={styles.subTitleText}>
        {children}
      </SubTitle>

      <FlatList
        data={plants}
        renderItem={({ item }) => <TinyCard plant={item} />}
        keyExtractor={(item) => item.Id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{ paddingRight: 32 }}></View>}
        style={styles.list}
      />
    </>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    flex: 0.35,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },

  subTitleText: {
    fontSize: 20,
    height: "100%",
    textAlignVertical: "center",
  },

  ////////

  list: {
    flex: 1,
    paddingLeft: 16,
  },
});

export default TinyCardList;
