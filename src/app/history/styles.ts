import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  containerHeader: {
    marginTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderColor: colors.purple[800],
  },
  containerTitle: {
    fontSize: 24,
    fontWeight: 600,
    color: colors.purple[800],
  },
  containerSpan: {
    fontSize: 16,
    color: colors.purple[700],
  },
  containerContent: {
    paddingHorizontal: 24,
  },
  listContainer: {
    marginTop: 24,
    gap: 24,
    paddingBottom: 250
  }
})