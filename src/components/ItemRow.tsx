import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

interface Item {
  id: string;
  name: string;
  price: string;
}

interface ItemRowProps {
  item: Item;
  width: number;
  onDelete: (id: string) => void;
  onUpdate: (id: string, field: "name" | "price", value: string) => void;
}

const ItemRow = ({ item, width, onDelete, onUpdate }: ItemRowProps) => {
  return (
    <View style={styles.itemRowContainer}>
      <View style={[styles.inputContainer, { width: width * 0.3 }]}>
        <TextInput
          placeholder="ex: door"
          style={styles.input}
          value={item.name}
          onChangeText={(text) => onUpdate(item.id, "name", text)}
        />
      </View>
      <View style={[styles.inputContainer, { width: width * 0.2 }]}>
        <TextInput
          placeholder="ex: 2"
          keyboardType="numeric"
          style={styles.input}
          value={item.price}
          onChangeText={(text) => onUpdate(item.id, "price", text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.buttonCircular, { backgroundColor: "gold" }]}>
          <AntDesign name="camera" size={24} color="#ffff" />
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => onDelete(item.id)}
          style={[styles.buttonCircular, { backgroundColor: "red" }]}
        >
          <AntDesign name="minus" size={24} color="#ffff" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  inputContainer: {
    marginRight: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "gray",
  },
  buttonContainer: {
    width: 50,
    alignItems: "center",
  },
  buttonCircular: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemRow;
