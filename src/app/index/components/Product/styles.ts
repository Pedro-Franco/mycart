import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.purple[500],
  },
  itemName: {
    color: colors.gray[100],
    fontSize: 16,
    fontWeight: '400',
  },
  itemSpan: {
    color: colors.gray[100],
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
  }
})