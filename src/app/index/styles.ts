import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple[950],
  },
  cartIcon: {
    color: colors.gray[100],
    fontSize: 48,
    textAlign: 'center',
  },
  contentContainer: {
    marginVertical: 24,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.purple[800],
    paddingHorizontal: 24,
  },
  contentTitle: {
    color: colors.gray[100],
    fontSize: 18,
    paddingBottom: 16,
  },
  listContainer: {
    gap: 16,
    marginTop: 16,
    paddingBottom: 200,
    paddingHorizontal: 24,
  },
  footerContainer: {
    paddingVertical: 18,
    paddingHorizontal: 18,
    bottom: 24,
    left: 24,
    right: 24,
    backgroundColor: colors.purple[950],
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.purple[500],
    borderRadius: 100,
  },
  footerText: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: '600',
  },
})