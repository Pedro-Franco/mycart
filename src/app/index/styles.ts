import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  cartIcon: {
    textAlign: 'center',
    fontSize: 48,
    color: colors.pink[800],
  },
  contentContainer: {
    marginVertical: 24,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    borderColor: colors.pink[800],
  },
  contentTitle: {
    fontSize: 18,
    paddingBottom: 16,
    color: colors.pink[800],
  },
  listContainer: {
    gap: 16,
    marginTop: 16,
    paddingBottom: 200,
    paddingHorizontal: 24,
  },
  footerContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 24,
    left: 24,
    right: 24,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: colors.pink[800],
    borderColor: colors.pink[300],
  },
  footerText: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: '600',
  },
})