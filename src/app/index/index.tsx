import { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList, TouchableOpacity, Alert, Pressable } from "react-native";
import { router, useFocusEffect } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

import { Products } from "./components/Product";
import { ModalProduct } from "./components/ModalProduct";
import { CartStorage, cartStorage } from "@/storage/cart-storage";

export default function Index() {
  const [products, setProducts] = useState<CartStorage[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<CartStorage>({} as CartStorage);
  const [modalVisible, setModalVisible] = useState(false);
  const [total, setTotal] = useState<number>(0);
  const [formattedTotal, setFormattedTotal] = useState<string>("R$ 0,00");

  async function getProducts() {
    try {
      const response = await cartStorage._getProduct();
      setProducts(response);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os produtos");
      console.log(error);
    }
  }

  async function totalPrice() {
    try {
      const response = await cartStorage._getProduct();

      const total = response.reduce((acc, item) => {
        const price = parseFloat(item.price.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()) || 0;
        const quantity = parseFloat(item.quantity )|| 1;
        return acc + (price * quantity);
      }, 0)

      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(total);

      setTotal(total);
      setFormattedTotal(formatted);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível calcular o valor total");
    }
  }

  async function productRemove() {
    try {
      await cartStorage._removeProduct(selectedProduct.id);

      getProducts();
      totalPrice();
      setModalVisible(false);
    } catch (error) {
      Alert.alert("Apagar produto", "Não foi possível apagar produto");
    }
  }

  async function handleRemove() {
    Alert.alert(
      "Apagar produto", "Deseja realmente apagar o produto?", [
        {style: "cancel", text: "Não"},
        {text: "Sim", onPress: productRemove},
      ]
    )
  }

  async function handleSelectedProduct(product?: CartStorage) {
    if(product){
      setSelectedProduct(product)
    }

    setModalVisible(!modalVisible)
  }

  useFocusEffect(
    useCallback(() => {
      getProducts();
      totalPrice();
    }, [products])
  )

  return(
    <SafeAreaView style={styles.container}>
      <MaterialIcons name="shopping-bag" style={styles.cartIcon} />
      
      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitle}>Lista de compras</Text>
          <TouchableOpacity onPress={() => router.navigate('./addProducts')}>
            <MaterialIcons name="add-circle-outline" size={32}  color={colors.purple[700]} />
          </TouchableOpacity>
        </View>

        {
        products.length === 0 ?
          <View style={styles.emptyContent}>
            <Text style={styles.contentSpan}>Sem produtos no carrinho.</Text>
            <View style={styles.iconTextContainer}>
              <Text style={styles.contentSpan}>Adicione novos produtos clicando em</Text>
              <MaterialIcons name="add-circle-outline" size={24} color={colors.gray[400]} />
            </View>
          </View>
        :
          <FlatList
            data={products}
            keyExtractor={(item)=> item.id}
            renderItem={({ item }) => (
              <Products
                product={item.product}
                quantity={item.quantity}
                price={item.price}
                onPress={() => handleSelectedProduct(item)}
              />
            )}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        }
      </View>

      <ModalProduct
        product={selectedProduct.product}
        quantity={selectedProduct.quantity}
        price={selectedProduct.price}
        modalVisible={modalVisible}
        onPress={() => handleSelectedProduct()}
        removeProduct={handleRemove}
      />

      <View style={styles.footerContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.footerRemove}>
          <MaterialIcons name="delete-outline" size={32} color={colors.gray[100]} />
        </TouchableOpacity>

        <Text style={styles.footerTotal}>{formattedTotal}</Text>

        <TouchableOpacity activeOpacity={0.8} style={styles.footerSave}>
          <MaterialIcons name="save-alt" size={32} color={colors.gray[100]} />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}