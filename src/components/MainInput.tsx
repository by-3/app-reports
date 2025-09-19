import {
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";

interface MainInputProps {
  name?: string;
  exaple?: string;
}

const MainInput = ({ name = "name", exaple = "test" }: MainInputProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        style={[styles.input, { width: width * 0.75 }]}
        placeholder={`ex : ${exaple}`}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: "hidden",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  text: { fontSize: 16, color: "#333", marginBottom: 5 },
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

export default MainInput;
