import { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { router, useFocusEffect } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

import { Products } from "./components/Product";
import { ModalProduct } from "./components/ModalProduct";
import { CartStorage, cartStorage } from "@/storage/cart-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [products, setProducts] = useState<CartStorage[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [total, setTotal] = useState<number>();

  async function getProducts() {
    try {
      const response = await cartStorage._getProduct();
      setProducts(response);

      console.log(response);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os produtos");
      console.log(error)
    }
  }

  async function totalPrice() {
    try {
      const response = await cartStorage._getProduct();

      const total = response.reduce((acc, item) => {
        return acc + parseFloat(item.price.replace("R$", "") ?? 0)
      }, 0)

      setTotal(total)

      console.log(total)
    } catch (error) {
      Alert.alert("Erro", "Não foi possível calcular o valor total");
    }
  }

  async function clearData() {
    await AsyncStorage.clear()
  }

  useFocusEffect(
    useCallback(() => {
      getProducts()
      totalPrice()
    }, [])
  )

  return(
    <SafeAreaView style={styles.container}>
      <MaterialIcons name="shopping-bag" style={styles.cartIcon} />
      
      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitle}>Lista de compras</Text>
          <TouchableOpacity onPress={() => router.navigate('./addProducts')}>
            <MaterialIcons name="add-circle" size={24}  color={colors.pink[800]} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={products}
          keyExtractor={(item)=> item.id}
          renderItem={({ item }) => (
            <Products
              product={item.product}
              quantity={item.quantity}
              price={item.price}
              onPress={() => setModalVisible(true)}
            />
          )}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <ModalProduct
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
      />

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>VALOR TOTAL</Text>
        <Text style={styles.footerText}>R${total?.toFixed(2).replace(".", ",")}</Text>
      </View>

      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}