import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    color: colors.purple[700],
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
    textDecorationColor: colors.purple[700],
  },
})