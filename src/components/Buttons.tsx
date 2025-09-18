import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Buttons() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/">homd</Link>
      <Link href="/archive">archive</Link>
      <Link href="/input">input</Link>
      <Link href="/print">print</Link>
      <Link href="/settings">settings</Link>
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
