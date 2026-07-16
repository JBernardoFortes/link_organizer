import { MaterialIcons } from "@expo/vector-icons";

interface Category {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Curso",
    icon: "code",
  },
  {
    id: "2",
    name: "Projetos",
    icon: "folder",
  },
  {
    id: "3",
    name: "Sites",
    icon: "language",
  },
  {
    id: "4",
    name: "Videos",
    icon: "movie",
  },
  {
    id: "5",
    name: "Artigo",
    icon: "newspaper",
  },
  {
    id: "6",
    name: "Documentacao",
    icon: "content-paste",
  },
];
