import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../Category";
import { styles } from "./styles";

interface Props {
  selected: string;
  onChangeCategory: (categoryId: string) => void;
}

export function CategoryList({ selected, onChangeCategory }: Props) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          {...item}
          isSelected={item.name === selected}
          onPress={() => onChangeCategory(item.name)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
