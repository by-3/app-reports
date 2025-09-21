import BackGround from "@/src/components/BackGround";
import mainStyles from "@/src/styles/styles";
import { Text, View } from "react-native";

export default function Print() {
  return (
    <BackGround>
      <View style={mainStyles.container}>
        <Text>print</Text>
      </View>
    </BackGround>
  );
}
