import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  cartIcon: {
    textAlign: 'center',
    fontSize: 32,
    color: colors.purple[700],
  },
  contentContainer: {
    marginVertical: 24,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    borderColor: colors.purple[800],
    paddingBottom: 12,
  },
  contentTitle: {
    fontSize: 18,
    color: colors.purple[800],
  },
  listContainer: {
    gap: 16,
    marginTop: 16,
    paddingBottom: 200,
    paddingHorizontal: 24,
  },
  emptyContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    paddingHorizontal: 24,
  },
  contentSpan: {
    fontSize: 16,
    color: colors.gray[400],
    textAlign: 'center',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 24,
    paddingHorizontal: 24,
  },
  footerTotal: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: '700',
    padding: 16,
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: colors.purple[800],
    borderColor: colors.purple[300],
  },
  footerSave: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: '700',
    padding: 12,
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: colors.green[500],
    borderColor: colors.green[500],
  },
  footerRemove: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: '700',
    padding: 12,
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: colors.red[500],
    borderColor: colors.red[500],
  },
})