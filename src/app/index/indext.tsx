// Ponto de entrada da aplicacao
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function Index() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={styles.title}>Hello React Native</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
