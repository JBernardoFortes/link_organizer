// Ponto de entrada da aplicacao
import { CategoryList } from "@/components/CategoryList";
import { Link } from "@/components/Link";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
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
        <CategoryList></CategoryList>

        <FlatList
          data={["1", "2", "3"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Link
              name="Google"
              url="https://google.com.br"
              onDetails={() => {}}
            />
          )}
          style={styles.links}
          contentContainerStyle={styles.linksContent}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
