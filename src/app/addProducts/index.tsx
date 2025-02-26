import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

import { router } from "expo-router";

export default function AddProducts() {
  const [product, setProduct] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [quantity, setQuantity] = useState<string>("")

  return(
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
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
            placeholderTextColor={colors.pink[800]}
            onChangeText={setProduct}
            value={product}
            style={styles.input}
          />

          <Text style={styles.label}>Preço unitário</Text>
          <TextInputMask 
            placeholder="R$0,00"
            placeholderTextColor={colors.pink[800]}
            type='money'
            options={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: "R$",
              mask: "R$ 000,00",
            }}
            onChangeText={setPrice}
            value={price}
            style={styles.input}
            keyboardType="number-pad"
          />

          <Text style={styles.label}>Quantidade</Text>
          <TextInput
            placeholder="10"
            placeholderTextColor={colors.pink[800]}
            onChangeText={setQuantity}
            value={quantity}
            style={styles.input}
            keyboardType="number-pad"
          />
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => console.log("Produto adicionado", product, price, quantity)}>
          <Text style={styles.buttonText}>Adicionar produto</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}