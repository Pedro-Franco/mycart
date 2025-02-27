import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 'auto',
    padding: 24,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.purple[800],
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalHeaderTitle: {
    color: colors.gray[100],
    fontSize: 20,
    fontWeight: '600',
  },
  modalContent: {
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingTop: 16,
    gap: 6,
  },
  modalContentText: {
    color: colors.gray[100],
    fontSize: 16,
  },
  modalFooter: {
    paddingTop: 24,
  },
  modalFooterButton: {
    backgroundColor: colors.red[500],
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