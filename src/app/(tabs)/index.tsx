import MainButton from "@/src/components/MainButton";
import mainStyles from "@/src/styles/styles";
import { Image, Text, View } from "react-native";

const buttonnames = [
  "محضر جديد",
  "استعراض المحاضر القديمة",
  "طباعة جميع المحاظر PDF",
  "طباعة جميع المحاظر اكسل",
];
export default function Index() {
  return (
    <View style={mainStyles.container}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ height: 200, width: 200, marginBottom: 100 }}
      />
      <Text>Welcome, Uesr</Text>
      {buttonnames.map((name, index) => (
        <MainButton key={index} type="primary" name1={name} />
      ))}
    </View>
  );
}
