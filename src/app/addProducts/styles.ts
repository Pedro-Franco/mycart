import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  containerHeader: {
    padding: 24,
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
    flex: 1,
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
    borderColor: colors.pink[700],
    borderRadius: 8,
    marginBottom: 12,
    color: colors.pink[800],
  },
  button: {
    position: 'absolute',
    alignItems: "center",
    justifyContent: "center",
    bottom: 24,
    left: 24,
    right: 24,
    padding: 14,
    borderRadius: 12,
    backgroundColor: colors.pink[800],
  },
  buttonText: {
    color: colors.gray[100],
    fontSize: 16,
    fontWeight: 600,
  }
})