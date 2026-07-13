// Ponto de entrada da aplicacao
import { CategoryList } from "@/components/CategoryList";
import { Link } from "@/components/Link";
import { Option } from "@/components/Option";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Modal,
  Text,
  Alert,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./index/styles";
import {linkStorage, LinkStorage} from "@/storage/link-storage";

export default function Index() {
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [category, setCategory] = useState<string>(categories[0]?.name);
  

  const fetchLinks = async () => { 
    try {
      const response = await linkStorage.getLinks();
      setLinks(response);
    } catch ( error ) { 
      Alert.alert("Erro", "Não foi possível carregar os links")
    }
  }
  
  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require("@/assets/logo.png")}
            style={styles.logo}
          ></Image>
          <TouchableOpacity onPress={() => router.navigate("/add")}>
            <MaterialIcons
              name="add"
              size={32}
              color={colors.green[300]}
            ></MaterialIcons>
          </TouchableOpacity>
        </View>
        <CategoryList
          onChangeCategory={setCategory}
          selected={category}
        ></CategoryList>

        <FlatList
          data={links}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              name={item.name}
              url={item.url}
              onDetails={() => {}}
            />
          )}
          style={styles.links}
          contentContainerStyle={styles.linksContent}
          showsVerticalScrollIndicator={false}
        />

        <Modal transparent visible={false}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalCategory}>Curso</Text>
                <TouchableOpacity>
                  <MaterialIcons
                    name="close"
                    size={20}
                    color={colors.gray[400]}
                  ></MaterialIcons>
                </TouchableOpacity>
              </View>

              <Text style={styles.modalLinkName}> Google </Text>
              <Text style={styles.modalUrl}> https://google.com.br</Text>

              <View style={styles.modalFooter}>
                <Option name="Excluir" icon="delete" variant="secondary" />
                <Option name="Abrir" icon="language" />
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
