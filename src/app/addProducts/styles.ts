import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  containerHeader: {
    padding: 24,
    marginBottom: 16,
    gap: 12,
  },
  containerTitle: {
    fontSize: 24,
    fontWeight: 600,
    color: colors.pink[800],
  },
  containerSpan: {
    fontSize: 14,
    color: colors.pink[800],
  },
  containerContent: {
    paddingHorizontal: 24
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.pink[800],
    marginBottom: 8,
  },
  input: {
    padding: 14,
    borderWidth: 2,
    borderColor: colors.pink[800],
    borderRadius: 8,
    marginBottom: 12,
    color: colors.pink[800],
  }
})