import React from "react";
import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import HomeDetail from "./HomeDetail";
import { APP_COLORS } from "../../utils/constants";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 110, height: 40 }}
      source={require("media-collab-template/src/assets/media_collab_light.png")}
    />
  );
}

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: APP_COLORS.white,
          elevation: 2,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          color: "black",
          fontWeight: "bold",
          fontSize: 16,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Stack.Screen name="HomeDetail" component={HomeDetail} />
    </Stack.Navigator>
  );
}
