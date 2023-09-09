import {CryptoProps} from './crypto';

export interface ModalDetailProps {
  cryptoItem: CryptoProps;
  setmodalDetail: React.Dispatch<React.SetStateAction<boolean>>;
}
