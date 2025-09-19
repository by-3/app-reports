import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { v4 as uuidv4 } from "uuid";

// استيراد المكونات
import BackGound from "@/src/components/BackGround";
import ItemRow from "@/src/components/ItemRow"; // تم استيراد المكون من موقعه الجديد
import MainInput from "@/src/components/MainInput";
import mainStyles from "@/src/styles/styles";

// تعريف هيكل بيانات العنصر
interface Item {
  id: string;
  name: string;
  price: string;
}

const inputsFild = [
  { name: "Owner", exaple: "Muhammad Ali" },
  { name: "tenant", exaple: "Ali Mohammed" },
  { name: "Unit", exaple: "3 / c" },
  { name: "RealEstate", exaple: "residential building" },
  { name: "Electricity meter", exaple: "938573495693857" },
];

export default function InputPage() {
  const { width } = useWindowDimensions();
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { id: uuidv4(), name: "", price: "" },
    ]);
  };

  const handleDeleteItem = (idToDelete: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
  };

  const handleUpdateItem = (
    idToUpdate: string,
    field: "name" | "price",
    value: string
  ) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === idToUpdate ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <BackGound>
      <ScrollView>
        <View style={mainStyles.container}>
          {inputsFild.map((input, index) => (
            <MainInput key={index} name={input.name} exaple={input.exaple} />
          ))}
          <View style={[styles.container, { width: width - 50 }]}>
            <View style={styles.headersContainer}>
              <Text style={[styles.text, { width: width * 0.3 }]}>name</Text>
              <Text style={[styles.text, { width: width * 0.2 }]}>price</Text>
              <Text style={[styles.text, { width: 50, textAlign: "center" }]}>
                Img
              </Text>
              <Text style={[styles.text, { width: 50, textAlign: "center" }]}>
                Delet
              </Text>
            </View>

            {items.map((item) => (
              <ItemRow
                key={item.id}
                item={item}
                width={width}
                onDelete={handleDeleteItem}
                onUpdate={handleUpdateItem}
              />
            ))}
          </View>
          <Button title="+" onPress={handleAddItem} />
        </View>
      </ScrollView>
    </BackGound>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    margin: 20,
  },
  headersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
  },
});
