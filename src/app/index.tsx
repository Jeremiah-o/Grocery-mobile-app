import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen. 1234</Text>
      <Image
        source={require("../../assets/images/icon.png")}
        style={{width:200, height:200, borderRadius:20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
