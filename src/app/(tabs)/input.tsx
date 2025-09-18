import { StyleSheet, Text, View } from "react-native";

export default function Input() {
  return (
    <View style={styles.container}>
      <Text>input</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
