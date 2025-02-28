import { useState } from "react";
import { View, TouchableOpacity, Text, Vibration } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  product: string;
  quantity: string;
  price: string;
  onPress: () => void;
}

export function Products({ product, quantity, price, onPress }: Props) {
  const [checked, setChecked] = useState(false);

  return(
    <TouchableOpacity 
      activeOpacity={0.8} 
      style={styles.itemContainer} 
      onPress={() => setChecked((prev) => !prev)}
      onLongPress={onPress}
      delayLongPress={300}
    >
      <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
        <MaterialIcons 
          name={checked ? "check-box" : "check-box-outline-blank"}
          size={24} 
          color={colors.gray[100]}
        />
        <Text style={styles.itemName}>{product}</Text>
      </View>

      <View>
        <Text style={styles.itemSpan}>Qtd: {quantity}</Text>
        <Text style={styles.itemSpan}>{price}</Text>
      </View>
    </TouchableOpacity>
  )
}