import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  title: {
    color: colors.green[300],
    fontSize: 20,
  },
  logo: {
    height: 32,
    width: 38,
  },
  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  linksContent: {
    gap: 20,
    padding: 24,
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingBottom: 42,
    padding: 24,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  modalFooter: {
    flexDirection: "row",
    marginTop: 32,
    width: "100%",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingVertical: 14,
  },
  modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: 500,
    color: colors.gray[400],
  },
  modalUrl: {
    fontSize: 24,
    color: colors.gray[400],
  },
  modalLinkName: {
    fontSize: 18,
    fontWeight: 600,
    color: colors.gray[200],
  },
});
