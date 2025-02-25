import { Modal, View, TouchableOpacity, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

type ModalProductProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

export function ModalProduct({ modalVisible, setModalVisible }: ModalProductProps) {

  return(
    <Modal visible={modalVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderTitle}>Detalhes do produto</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <MaterialIcons name="close" size={32} color={colors.gray[100]} />
          </TouchableOpacity>
        </View>

        <View style={styles.modalContent}>
          <Text style={styles.modalContentText}>Nome do produto: banana</Text>
          <Text style={styles.modalContentText}>Quantidade: 10</Text>
          <Text style={styles.modalContentText}>Preço: R$ 10,00</Text>
        </View>

        <View style={styles.modalFooter}>
          <TouchableOpacity activeOpacity={0.7} style={styles.modalFooterButton}>
            <Text style={styles.modalFooterButtonText}>Apagar produto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
