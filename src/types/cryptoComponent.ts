import {SharedValue} from 'react-native-reanimated';
import {CryptoProps} from './crypto';

export interface CryptoComponentProps {
  cryptoItem: CryptoProps;
  scrollY: SharedValue<number>;
  index: number;
}
