import { View, Text, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

import { router } from "expo-router";
import { Purchases } from "./components/Purchases";

export default function History() {

  const data = [
    {
      id: "1",
      date: "28/02/2025",
      price: "R$ 637,28",
    },
    // {
    //   id: "2",
    //   date: "27/03/2025",
    //   price: "R$ 660,00",
    // },
    // {
    //   id: "3",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "4",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "5",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "6",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "7",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "8",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "9",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "10",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "11",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "12",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "13",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "14",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
    // {
    //   id: "15",
    //   date: "27/04/2025",
    //   price: "R$ 643,90",
    // },
  ]

  return(
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="close" size={32} color={colors.purple[800]} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>Histórico de compras</Text>
        <Text style={styles.containerSpan}>Aqui você pode verificar as últimas compras realizadas</Text>
      </View>

      <View style={styles.containerContent}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Purchases
              date={item.date}
              price={item.price}
            />
          )}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}