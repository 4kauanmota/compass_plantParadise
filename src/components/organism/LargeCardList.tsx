import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import LargeCard from "../molecules/LargeCard";
import TextOptions from "../atoms/TextOptions";
import { RootStackParamList } from "../../navigators/StackNavigation";

type LargeCardListType = {
  plants?: IPlantsCard[];
};

const LargeCardList = ({ plants }: LargeCardListType) => {
  const [filterdPlants, setFilteredPlants] = useState<IPlantsCard[]>();

  const [filterOptions, setFilterOptions] = useState<ITextOptions[]>([
    { text: "All", selected: true },
    { text: "Indoor", selected: false },
    { text: "Outdoor", selected: false },
  ]);

  useEffect(() => {
    const selectedOption = filterOptions.filter((opt) => opt.selected)[0];

    let selectedPlants;
    if (selectedOption.text === "All") {
      selectedPlants = plants;
    } else {
      selectedPlants = plants?.filter(
        (plant) => plant.category === selectedOption.text
      );
    }

    setFilteredPlants(selectedPlants);
  }, [filterOptions]);

  return (
    <View style={styles.container}>
      <TextOptions
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />

      <FlatList
        data={filterdPlants}
        renderItem={({ item }) => <LargeCard plant={item} />}
        keyExtractor={(item) => item.id}
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
