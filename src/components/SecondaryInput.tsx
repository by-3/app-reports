import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, TextInput, View, useWindowDimensions } from "react-native";
import MainButton from "./MainButton";

export const SecondaryInput = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width: width - 50 }]}>
      <TextInput placeholder="ex : door" style={styles.input}></TextInput>
      <TextInput
        placeholder="ex : 2"
        keyboardType="numeric"
        style={styles.input}
      ></TextInput>
      <MainButton type="circular" color="gold">
        <AntDesign name="minus" size={24} color="#ffff" />
      </MainButton>
      <MainButton type="circular" color="red">
        <AntDesign name="camera" size={24} color="#ffff" />
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 50,
    writingDirection: "ltr",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "gray",
  },
});
