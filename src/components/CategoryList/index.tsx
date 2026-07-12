import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../Category";
import { styles } from "./styles";

export function CategoryList() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Category {...item} isSelected />}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
