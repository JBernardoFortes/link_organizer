// Ponto de entrada da aplicacao
import { Category } from "@/components/Category";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function Index() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require("@/assets/logo.png")}
            style={styles.logo}
          ></Image>
          <TouchableOpacity>
            <MaterialIcons
              name="add"
              size={32}
              color={colors.green[300]}
            ></MaterialIcons>
          </TouchableOpacity>
        </View>
        <Category icon="code" name="Projetos" />
        <Category icon="language" name="Sites" />
        <Category icon="movie" name="Videos" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
