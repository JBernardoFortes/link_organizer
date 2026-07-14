// Ponto de entrada da aplicacao
import { CategoryList } from "@/components/CategoryList";
import { Link } from "@/components/Link";
import { Option } from "@/components/Option";
import { linkStorage, LinkStorage } from "@/storage/link-storage";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Linking,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./index/styles";

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [category, setCategory] = useState<string>(categories[0]?.name);
  const [selectedLink, setSelectedLink] = useState<LinkStorage>(
    {} as LinkStorage,
  );

  const fetchLinks = async () => {
    try {
      const response = await linkStorage.getLinks();

      const filtered = response.filter((link) => link.category === category);

      setLinks(filtered);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os links");
    }
  };

  const handleDetails = (selected: LinkStorage) => {
    setShowModal(true);
    setSelectedLink(selected);
  };

  const linkRemove = async () => {
    try {
      await linkStorage.removeLink(selectedLink.id);
      fetchLinks();
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir o link");
    }
  };

  const handleRemove = async () => {
    Alert.alert("Excluir", "Deseja realmente excluir esse link?", [
      { style: "cancel", text: "Não" },
      {
        text: "Sim",
        onPress: async () => {
          linkRemove();
        },
      },
    ]);
  };

  const handleOpen = async () => {
    try {
      await Linking.openURL(selectedLink.url);
    } catch (error) {
      Alert.alert("Erro", "Nao foi possivel abrir o link");
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchLinks();
    }, [category]),
  );

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
              onDetails={() => handleDetails(item)}
            />
          )}
          style={styles.links}
          contentContainerStyle={styles.linksContent}
          showsVerticalScrollIndicator={false}
        />

        <Modal
          transparent
          visible={showModal}
          animationType="slide"
          onRequestClose={() => setShowModal(false)}
        >
          <Pressable
            style={styles.modal}
            onPress={() => setShowModal(false)}
          ></Pressable>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                ></MaterialIcons>
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}> {selectedLink.name} </Text>
            <Text style={styles.modalUrl}> {selectedLink.url}</Text>

            <View style={styles.modalFooter}>
              <Option
                name="Excluir"
                icon="delete"
                variant="secondary"
                onPress={() => {
                  handleRemove();
                }}
              />
              <Option
                name="Abrir"
                icon="language"
                onPress={() => handleOpen()}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
