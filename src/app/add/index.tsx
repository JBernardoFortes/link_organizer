import { Button } from "@/components/Button";
import { CategoryList } from "@/components/CategoryList";
import { Input } from "@/components/Input";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Add() {
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handleChangeName = (text: string) => setName(text);
  const handleChangeUrl = (text: string) => setUrl(text);

  const handleAdd = () => {
    if (!category) {
      return Alert.alert("Categoria", "Selecione uma categoria");
    }
    if (!url.trim()) {
      return Alert.alert("URL", "Informe uma URL");
    }
    if (!name.trim()) {
      return Alert.alert("Name", "Informe um nome");
    }
    console.log(name);
    console.log(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons
            name="arrow-back"
            size={32}
            color={colors.gray[200]}
          ></MaterialIcons>
        </TouchableOpacity>
        <Text style={styles.title}> Novo </Text>
      </View>
      <Text style={styles.label}>Selecione uma categoria</Text>
      <CategoryList
        onChangeCategory={setCategory}
        selected={category}
      ></CategoryList>

      <View style={styles.form}>
        <Input placeholder="Name" onChangeText={handleChangeName} />
        <Input placeholder="URL" onChangeText={handleChangeUrl} />
        <Button title="Adicionar" onPress={handleAdd}></Button>
      </View>
    </View>
  );
}
