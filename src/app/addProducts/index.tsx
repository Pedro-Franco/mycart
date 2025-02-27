import { useState } from "react";
import { Alert, View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

import { router } from "expo-router";
import { cartStorage } from "@/storage/cart-storage";

export default function AddProducts() {

  const [product, setProduct] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [quantity, setQuantity] = useState<string>("")

  async function handleAddProduct() {
    try {
      if (!product || !price || !quantity){
        Alert.alert("Erro", "Preencha todos os campos para adicionar o produto ao carrinho")
      } else {
        await cartStorage._postProduct({
          id: new Date().getTime().toString(),
          product: product,
          price: price,
          quantity: quantity,
        })

        setProduct("")
        setPrice("")
        setQuantity("")

        Alert.alert("Sucesso", "Produto adicionado ao carrinho com sucesso", [
          {
            text: "Ok",
            onPress: () => router.back()
          }
        ])
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar o produto ao carrinho de compras")
      console.log(error)
    }
  }

  return(
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="close" size={32} color={colors.purple[800]} />
          </TouchableOpacity>
          <Text style={styles.containerTitle}>Adicionar produtos</Text>
          <Text style={styles.containerSpan}>Aqui você pode adicionar produtos ao seu carrinho</Text>
        </View>

        <View style={styles.containerContent}>
          <Text style={styles.label}>Produto</Text>
          <TextInput
            placeholder="Maçã"
            placeholderTextColor={colors.purple[700]}
            onChangeText={setProduct}
            value={product}
            style={styles.input}
          />

          <Text style={styles.label}>Preço unitário</Text>
          <TextInputMask 
            placeholder="R$0,00"
            placeholderTextColor={colors.purple[700]}
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
            placeholderTextColor={colors.purple[700]}
            onChangeText={setQuantity}
            value={quantity}
            style={styles.input}
            keyboardType="number-pad"
          />
        </View>

        <TouchableOpacity 
          activeOpacity={0.8} 
          style={styles.button} 
          onPress={handleAddProduct}
        >
          <Text style={styles.buttonText}>Adicionar produto</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}