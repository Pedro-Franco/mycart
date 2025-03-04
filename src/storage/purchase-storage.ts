import AsyncStorage from "@react-native-async-storage/async-storage";

const PURCHASE_STORAGE_KEY = "mycart@purchase"

export type PurchaseStorage = {
  id: string;
  price: string;
  date: string;
}

async function _getPurchase(): Promise<PurchaseStorage[]>{
  const storage = await AsyncStorage.getItem(PURCHASE_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}

async function _postPurchase(newPurchase: PurchaseStorage) {
  const storage = await _getPurchase();
  const updated = JSON.stringify([...storage, newPurchase]);

  await AsyncStorage.setItem(PURCHASE_STORAGE_KEY, updated);
}

export const purchaseStorage = { _getPurchase, _postPurchase };