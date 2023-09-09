import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserTheme = async () => {
  return await AsyncStorage.getItem('userTheme');
};
