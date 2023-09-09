import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCryptoListSaved = async () => {
  const list = await AsyncStorage.getItem('cryptoList');
  return JSON.parse(list);
};
