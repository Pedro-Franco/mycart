import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

import { Products } from "./components/Product";
import { ModalProduct } from "./components/ModalProduct";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    { id: 1, name: "banana", quantity: 10, price: 10 },
    { id: 2, name: "maçã", quantity: 5, price: 15 },
    { id: 3, name: "laranja", quantity: 8, price: 20 },
    { id: 4, name: "uva", quantity: 12, price: 25 },
    { id: 5, name: "abacaxi", quantity: 15, price: 30 },
    { id: 6, name: "manga", quantity: 20, price: 35 },
    { id: 7, name: "abacate", quantity: 25, price: 40 },
    { id: 8, name: "cereja", quantity: 30, price: 45 },
    { id: 9, name: "pêra", quantity: 35, price: 50 },
    { id: 10, name: "uva", quantity: 40, price: 55 },
    { id: 11, name: "banana", quantity: 10, price: 10 },
    { id: 12, name: "maçã", quantity: 5, price: 15 },
    { id: 13, name: "laranja", quantity: 8, price: 20 },
    { id: 14, name: "uva", quantity: 12, price: 25 },
    { id: 15, name: "abacaxi", quantity: 15, price: 30 },
  ]

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
          data={data}
          keyExtractor={(item)=> item.id.toString()}
          renderItem={({ item }) => (
            <Products
              name={item.name}
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
        <Text style={styles.footerText}>R$ 100,00</Text>
      </View>

      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}