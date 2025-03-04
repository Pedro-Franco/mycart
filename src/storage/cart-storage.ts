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

  async function _editProduct(updatedProduct: CartStorage) {
    try {
      const storage = await _getProduct();
      const updatedStorage = storage.map((product) => {
        product.id === updatedProduct.id ? updatedProduct : product
      })

      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedStorage));
    } catch (error) {
      throw error;
    }
  }

  async function _removeProduct(id: string) {
    try {
      const storage = await _getProduct();
      const updated = storage.filter((product) => product.id !== id);

      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
      throw error
    }
  }

  export const cartStorage = { _getProduct, _postProduct, _editProduct, _removeProduct };