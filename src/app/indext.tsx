// Ponto de entrada da aplicacao
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={{ color: "red", fontSize: 20 }}>Hello React Native</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
