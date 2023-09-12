import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import TinyCard from "../molecules/TinyCard";
import SubTitle from "../atoms/SubTitle";

type TinyCardListType = {
  children: string;
  plants?: IPlantsCard[];
};

const TinyCardList = ({ children, plants }: TinyCardListType) => {
  return (
    <>
      <SubTitle style={styles.subTitle} textStyle={styles.subTitleText}>
        {children}
      </SubTitle>

      {plants ? (
        <FlatList
          data={plants}
          renderItem={({ item }) => <TinyCard plant={item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View style={{ paddingRight: 32 }}></View>}
          style={styles.list}
        />
      ) : (
        <ActivityIndicator size={40} style={{ width: 287, height: 140 }} />
      )}
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
