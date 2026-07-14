import AsyncStorage from "@react-native-async-storage/async-storage";

const LINK_STORAGE_KEY = "links-storage";

export interface LinkStorage {
  id: string;
  name: string;
  url: string;
  category: string;
}

const getLinks = async (): Promise<LinkStorage[]> => {
  const storage = await AsyncStorage.getItem(LINK_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
};

const saveLink = async (newLink: LinkStorage) => {
  try {
    const storage = await getLinks();
    const updatedStorage = [...storage, newLink];

    await AsyncStorage.setItem(
      LINK_STORAGE_KEY,
      JSON.stringify(updatedStorage),
    );
  } catch (error) {
    throw error;
  }
};

const removeLink = async (id: string) => {
  try {
    const storage = await getLinks();

    const updated = storage.filter((link) => link.id !== id);

    await AsyncStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    throw error;
  }
};

export const linkStorage = {
  getLinks,
  saveLink,
  removeLink,
};
