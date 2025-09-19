import BackGound from "@/src/components/BackGround";
import mainStyles from "@/src/styles/styles";
import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Settings() {
  const [userName, setUserName] = useState("Test User");
  const [tempUserName, setTempUserName] = useState(userName);

  const handleSave = () => {
    Alert.alert(
      "Are you sure ?",
      `The new user name will be : ${tempUserName}`,
      [
        {
          text: "Yes",
          onPress: () => {
            setUserName(tempUserName);
            Alert.alert(`Username changed to: ${tempUserName}`);
          },
        },
        { text: "No" },
      ]
    );
  };

  const isSaveDisabled = tempUserName === userName;

  return (
    <BackGound>
      <View style={mainStyles.container}>
        <Text style={styles.text}>Enter User Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTempUserName}
          value={tempUserName}
          placeholder="Example: Abdullah Yousef"
          autoFocus={true}
        />
        <Pressable
          style={[
            styles.buttonPrimary,
            isSaveDisabled && styles.buttonDisabled,
          ]}
          onPress={handleSave}
          disabled={isSaveDisabled}
        >
          <Text style={styles.buttonText}>SAVE</Text>
        </Pressable>
        <Text>Current User : {userName}</Text>
      </View>
    </BackGound>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "400",
  },
  input: {
    height: 50,
    width: 250,
    writingDirection: "ltr",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonPrimary: {
    backgroundColor: "#217ABA",
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 5,
  },
  buttonText: {
    color: "#FFFFFF",
  },
  buttonDisabled: {
    backgroundColor: "#A9A9A9",
  },
});
