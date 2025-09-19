import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// تعريف الواجهة (Interface) لـ props
interface CardProps {
  number?: number;
  Owner?: string;
  tenant?: string;
  Unit?: string;
  RealEstate?: string;
  data?: string;
  imageUrl?: string; // يُفضل استخدام اسم واضح مثل imageUrl
}

// المكون الرئيسي للبطاقة (Card Component)
const OldReportCard: React.FC<CardProps> = ({
  number = 1,
  Owner = "Muhammad Ali",
  tenant = "Ali Mohammed",
  Unit = "3 / c",
  RealEstate = "residential building",
  data = "2025-09-18",
  imageUrl = "@/assets/images/logo.png",
}) => {
  return (
    <View style={styles.cardContainer}>
      {/*  */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>number: {number}</Text>
        <Text style={styles.text}>Owner: {Owner}</Text>
        <Text style={styles.text}>tenant: {tenant}</Text>
        <Text style={styles.text}>Unit: {Unit}</Text>
        <Text style={styles.text}>RealEstate: {RealEstate}</Text>
        <Text style={styles.text}>data: {data}</Text>
      </View>
      <Image
        style={styles.cardImage}
        source={require("@/assets/images/logo.png")}
      />
    </View>
  );
};

// أنماط المكون (Component Styles)
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: "hidden",
    margin: 20,
    elevation: 5, // للظلال في Android
    shadowColor: "#000", // للظلال في iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  cardImage: {
    height: "100%",
    width: 200, // يمكنك تعديل الارتفاع حسب الحاجة
  },
  textContainer: {
    padding: 15,
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
});

export default OldReportCard;
