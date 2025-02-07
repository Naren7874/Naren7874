import { Stack } from "expo-router";
import Login from "./login";
import "./global.css"

export default function RootLayout() {
  return (
    <>
    <Stack  screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="login"/>
      <Stack.Screen name="signup"/>
    </Stack>
    </>
  );
}
