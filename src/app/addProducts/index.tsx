import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { router } from "expo-router";

export default function AddProducts() {
  const [product, setProduct] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [quantity, setQuantity] = useState<string>("")

  return(
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={styles.containerTitle}>Adicionar produtos</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="close" size={32} color={colors.pink[800]} />
          </TouchableOpacity>
        </View>
        <Text style={styles.containerSpan}>Aqui você pode adicionar produtos ao seu carrinho</Text>
      </View>

      <View style={styles.containerContent}>
        <Text style={styles.label}>Produto</Text>
        <TextInput
          placeholder="Maçã"
          onChangeText={setProduct}
          value={product}
          style={styles.input}
        />

        <Text style={styles.label}>Preço</Text>
        <TextInput
          placeholder="R$ 10,00"
          onChangeText={setPrice}
          value={price}
          style={styles.input}
        />

        <Text style={styles.label}>Quantidade</Text>
        <TextInput 
          placeholder="10"
          onChangeText={setQuantity}
          value={quantity}
          style={styles.input}
        />
      </View>
    </View>
  )
}