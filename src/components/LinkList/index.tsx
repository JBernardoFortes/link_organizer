import { FlatList } from "react-native";
import { Link } from "../Link";

interface Props {
  links: {
    id: string;
    name: string;
    url: string;
  }[];
}

export function LinkList({ links }: Props) {
  return (
    <FlatList
      data={links}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Link {...item} onDetails={() => {}} />}
    />
  );
}
