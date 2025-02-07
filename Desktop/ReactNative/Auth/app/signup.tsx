import MyButton from "@/app-example/components/MyButton";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function SignUp() {
  const router = useRouter();

  const onConinue = ()=>{
    router.navigate("/login");
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
      <Text  style={{fontSize:40,  fontWeight:900 , color:"red" , }}>
       Hy this is SignUp
       </Text>
       <MyButton title={"signUp"} onPress={onConinue}></MyButton>
      </View>
  );
}
