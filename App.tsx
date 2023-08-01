import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { RSA } from "react-native-rsa-native";
import * as Device from "expo-device";

export default function App() {
  const onClick = async () => {
    const keys = await RSA.generateKeys(2048);
    console.log(Device.osName);
    console.log("Private: \n", keys.private);
    console.log("Public: \n", keys.public);
  };

  return (
    <View style={styles.container}>
      <Button title="Press me" color={"blue"} onPress={onClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
