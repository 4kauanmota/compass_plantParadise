import { FlatList, StyleSheet, Text } from "react-native";
import Plant from "../../models/Plant";
import PurchaseCard from "../molecules/PurchaseCard";
import { colors, shadow } from "../../theme";
import SubTitle from "../atoms/SubTitle";

type PurchaseCardListType = {
  purchases: Plant[];
};

const PurchaseCardList = ({ purchases }: PurchaseCardListType) => {
  const total = purchases.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return (
    <>
      <FlatList
        data={purchases}
        renderItem={({ item }) => <PurchaseCard plant={item} />}
        keyExtractor={() => Math.random().toString()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <SubTitle
            textStyle={{ fontSize: 16 }}
            style={{
              alignItems: "flex-end",
              marginTop: 10,
              marginHorizontal: 7,
            }}
          >
            Total: ${total.toFixed(2)}
          </SubTitle>
        }
        style={[styles.list, shadow.main]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 16,

    backgroundColor: colors.background,
    borderRadius: 8,

    marginVertical: 8,
    marginHorizontal: 24,
    padding: 10,
  },
});

export default PurchaseCardList;
