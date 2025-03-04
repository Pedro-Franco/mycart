import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

type Props = {
  date: string;
  price: string;
  onPress?: () => void;
}

export function Purchases({ date, price, onPress }: Props) {
  return(
    <TouchableOpacity 
      activeOpacity={0.5} 
      style={styles.itemContainer} 
      onPress={onPress}
    >
      <Text style={styles.itemName}>{date}</Text>

      <Text style={styles.itemName}>{price}</Text>
    </TouchableOpacity>
  )
}