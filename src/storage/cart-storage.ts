import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_STORAGE_KEY = "mycart@cart";

export type CartStorage = {
  id: string
  product: string
  price: string
  quantity: string
}

async function _getProduct(): Promise<CartStorage[]> {
  const storage = await AsyncStorage.getItem(CART_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}

async function _postProduct(newProduct: CartStorage) {
  try {
    const storage = await _getProduct();
    const updated = JSON.stringify([...storage, newProduct]);

    await AsyncStorage.setItem(CART_STORAGE_KEY, updated);
  } catch (error) {
    throw error;
  }
}

export const cartStorage = { _getProduct, _postProduct };