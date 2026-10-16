import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={{backgroundColor: "blue"}}>
      <View style={{padding: 2, backgroundColor: "yellow"}}>
        <Text style={{paddingLeft: 5, backgroundColor: "aqua"}}>Hi Sam</Text>
        <TextInput
         style={{backgroundColor: "green"}}
         placeholder="Enter text"
        />
      </View>
    </SafeAreaView>
  )
}
