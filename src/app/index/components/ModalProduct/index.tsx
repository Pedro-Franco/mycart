import { Modal, View, TouchableOpacity, Text, TouchableOpacityProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

type ModalProductProps = TouchableOpacityProps & {
  product: string;
  quantity: string;
  price: string;
  modalVisible: boolean;
  removeProduct: () => void;
}

export function ModalProduct({ product, quantity, price, modalVisible, removeProduct, onPress }: ModalProductProps) {

  return(
    <Modal visible={modalVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderTitle}>Detalhes do produto</Text>
          <TouchableOpacity onPress={onPress}>
            <MaterialIcons name="close" size={32} color={colors.gray[100]} />
          </TouchableOpacity>
        </View>

        <View style={styles.modalContent}>
          <Text style={styles.modalContentText}>Nome do produto: {product}</Text>
          <Text style={styles.modalContentText}>Quantidade: {quantity}</Text>
          <Text style={styles.modalContentText}>Preço unitário: {price}</Text>
        </View>

        <View style={styles.modalFooter}>          
          <TouchableOpacity activeOpacity={0.7} style={styles.modalFooterButton} onPress={removeProduct}>
            <Text style={styles.modalFooterButtonText}>Apagar produto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
