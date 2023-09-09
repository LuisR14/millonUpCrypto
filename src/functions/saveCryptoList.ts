import {CryptoProps} from '@app/types/crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCryptoList = async (cryptoList: CryptoProps[]) => {
  await AsyncStorage.setItem('cryptoList', JSON.stringify(cryptoList));
};
