import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import LargeCard from "../molecules/LargeCard";
import TextOptions from "../atoms/TextOptions";
import Plant from "../../models/Plant";

type LargeCardListType = {
  plants?: Plant[];
};

const LargeCardList = ({ plants }: LargeCardListType) => {
  const [filterdPlants, setFilteredPlants] = useState<Plant[]>();

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
  }, [filterOptions, setFilteredPlants, plants]);

  return (
    <View style={styles.container}>
      <TextOptions
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
      {filterdPlants ? (
        <FlatList
          data={filterdPlants}
          renderItem={({ item }) => <LargeCard plant={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<></>}
          style={styles.list}
        />
      ) : (
        <ActivityIndicator size={60} style={{ width: "100%", height: 278 }} />
      )}
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
