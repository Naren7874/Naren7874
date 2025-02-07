import MyButton from "@/app-example/components/MyButton";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const onConinue = ()=>{
    router.navigate("/login")
  }
  return (
    <View className="bg-red-700 h-full">
      <Text  style={{fontSize:40,  fontWeight:900 , color:"red" , }}>
       Hy this is naren
       </Text>
       <MyButton title={"login"} onPress={onConinue}></MyButton>
      </View>
  );
}
