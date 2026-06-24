import { Stack } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
      <SafeAreaView>
        <View style={{padding: 16}}>
          <Text>Wellcome! Samaresh 🚀</Text>
          <TextInput style={{ borderColor: "#ccc",borderWidth: 1, marginTop: 12 }} placeholder="enter text" />
          <TouchableOpacity style={{marginTop: 12, backgroundColor: "blue"}}
            onPress={() => alert("Submitted successfully!!!")}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}
