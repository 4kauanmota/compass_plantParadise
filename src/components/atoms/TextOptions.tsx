import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../../theme";
import PressArea from "./PressArea";

type TextOptionsType = {
  filterOptions: ITextOptions[];
  setFilterOptions: any;
};

const TextOptions = ({ filterOptions, setFilterOptions }: TextOptionsType) => {
  const handleClick = (index: number) => {
    const newOptions = filterOptions.map((el, i) => ({
      ...el,
      selected: i == index,
    }));

    setFilterOptions(newOptions);
  };

  return (
    <View style={styles.container}>
      {filterOptions.map((option: any, index: number) => (
        <PressArea onPress={() => handleClick(index)} key={index}>
          <Text
            style={
              option.selected ? [styles.option, styles.selected] : styles.option
            }
          >
            {option.text}
          </Text>
        </PressArea>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 40,

    paddingVertical: 20,
    paddingLeft: 2,
  },

  ////////

  option: {
    fontSize: 16,
    fontFamily: fonts.main[500],
    color: colors.font.light,
  },

  selected: {
    color: colors.font.strong,
  },
});

export default TextOptions;
