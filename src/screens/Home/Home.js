import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BtnCustom from "../../components/BtnCustom";
import { APP_COLORS } from "../../utils/constants";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: APP_COLORS.darkSecondary }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <BtnCustom navigation={navigation} />
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
