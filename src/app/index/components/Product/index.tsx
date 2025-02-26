import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  product: string;
  quantity: string;
  price: string;
  onPress: () => void;
}

export function Products({ product, quantity, price, onPress }: Props) {
  return(
    <TouchableOpacity activeOpacity={0.8} style={styles.itemContainer} onPress={onPress}>
      <Text style={styles.itemName}>{product}</Text>

      <View>
        <Text style={styles.itemSpan}>Qtd: {quantity}</Text>
        <Text style={styles.itemSpan}>{price}</Text>
      </View>
    </TouchableOpacity>
  )
}