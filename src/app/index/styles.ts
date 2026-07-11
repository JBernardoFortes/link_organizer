import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.green[300],
    fontSize: 20,
  },
});
