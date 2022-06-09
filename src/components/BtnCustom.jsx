import { View, Button } from "react-native";
import React from "react";

export default function BtnCustom({ navigation }) {
  return (
    <View>
      <Button
        title="Custom Button"
        onPress={() => navigation.navigate("HomeDetail")}
      />
    </View>
  );
}
