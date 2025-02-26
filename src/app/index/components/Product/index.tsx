import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  quantity: number;
  price: number;
  onPress: () => void;
}

export function Products({ name, quantity, price, onPress }: Props) {
  return(
    <TouchableOpacity activeOpacity={0.8} style={styles.itemContainer} onPress={onPress}>
      <Text style={styles.itemName}>{name}</Text>

      <View>
        <Text style={styles.itemSpan}>Qtd: {quantity}</Text>
        <Text style={styles.itemSpan}>R$ {price}</Text>
      </View>
    </TouchableOpacity>
  )
}