import BackGound from "@/src/components/BackGround";
import MainInput from "@/src/components/MainInput";
import { SecondaryInput } from "@/src/components/SecondaryInput";
import mainStyles from "@/src/styles/styles";
import { ScrollView, Text, View } from "react-native";

const inputsFild = [
  { name: "Owner", exaple: "Muhammad Ali" },
  { name: "tenant", exaple: "Ali Mohammed" },
  { name: "Unit", exaple: "3 / c" },
  { name: "RealEstate", exaple: "residential building" },
  { name: "Electricity meter", exaple: "938573495693857" },
];

export default function Input() {
  return (
    <BackGound>
      <View style={mainStyles.container}>
        {inputsFild.map((input, index) => (
          <MainInput key={index} name={input.name} exaple={input.exaple} />
        ))}
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text> name </Text>
            <Text> price </Text>
            <Text> Img </Text>
            <Text> delet </Text>
          </View>
          <SecondaryInput></SecondaryInput>
        </ScrollView>
      </View>
    </BackGound>
  );
}
