import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserTheme = async (style: string) => {
  await AsyncStorage.setItem('userTheme', style);
};
