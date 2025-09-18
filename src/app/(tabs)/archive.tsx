import { StyleSheet, Text, View } from "react-native";

export default function Archive() {
  return (
    <View style={styles.container}>
      <Text>archive</Text>
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
