import MyButton from "@/app-example/components/MyButton";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Login() {
  const router = useRouter();

  const onConinue = () => {
    router.navigate("/signup");
  };
  const onConinue2 = () => {
    router.navigate("/");
  };
  return (
    <View>
      <Text>
        Hy this is login
      </Text>
      <MyButton title={"signUp"} onPress={onConinue}></MyButton>
      <MyButton title={"home"} onPress={onConinue2}></MyButton>
    </View>
  );
}
