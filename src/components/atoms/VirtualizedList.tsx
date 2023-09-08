import { FlatList, StyleProp, ViewStyle } from "react-native";

type VirtualizedListType = {
  children: any;
  style?: StyleProp<ViewStyle>;
};

const VirtualizedList = ({ children, style }: VirtualizedListType) => {
  return (
    <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
      style={style}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default VirtualizedList;
