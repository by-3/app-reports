import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonProps {
  name1?: string;
  name2?: string;
  type: "primary" | "circular" | "double";
  children?: React.ReactNode;
  onPress?: () => void;
}

function MainButton({ name1, name2, type, children, onPress }: ButtonProps) {
  switch (type) {
    case "primary":
      return (
        <Pressable style={styles.buttonPrimary} onPress={onPress}>
          <Text style={{ color: "#FFFFFF" }}>{name1}</Text>
        </Pressable>
      );
    case "circular":
      return <Pressable style={styles.buttonCircular}>{children}</Pressable>;
    case "double":
      return (
        <View style={styles.container}>
          <Pressable
            style={[styles.buttonDouble, { backgroundColor: "#1E8E3E" }]}
          >
            <Text style={{ color: "#FFFFFF" }}>إكسل</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonDouble, { backgroundColor: "#1C69D3" }]}
          >
            <Text style={{ color: "#FFFFFF" }}>طباعة</Text>
          </Pressable>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: "#217ABA",
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 5,
  },
  buttonCircular: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    borderRadius: 15,
    overflow: "hidden",
    gap: 5,
  },
  buttonDouble: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

export default MainButton;
