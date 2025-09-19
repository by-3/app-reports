import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  name?: string;
  onPress?: () => void;
}

function MainButton({ name, onPress }: ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={{ color: "#FFFFFF" }}>{name}</Text>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#217ABA",
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 5,
  },
  container: {
    flexDirection: "row",
    borderRadius: 15,
    overflow: "hidden",
    gap: 5,
  },
});

export default MainButton;
