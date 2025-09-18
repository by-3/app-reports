import { StyleSheet, Text, View } from "react-native";

export default function Print() {
  return (
    <View style={styles.container}>
      <Text>print</Text>
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
