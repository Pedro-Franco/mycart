import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 225,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.pink[800],
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.pink[300],
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  modalHeaderTitle: {
    color: colors.gray[100],
    fontSize: 20,
    fontWeight: '600',
  },
  modalContent: {
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    gap: 6,
  },
  modalContentText: {
    color: colors.gray[100],
    fontSize: 16,
  },
  modalFooter: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  modalFooterButton: {
    backgroundColor: colors.pink[700],
    padding: 12,
    borderRadius: 8,
  },
  modalFooterButtonText: {
    color: colors.gray[100],
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
})