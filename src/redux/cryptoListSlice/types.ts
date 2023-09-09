import {CryptoProps} from '../../types/crypto';

export interface cryptoListItem {
  list: CryptoProps[] | [];
  listBackup: CryptoProps[] | [];
}
export const initialState: cryptoListItem = {
  list: [],
  listBackup: [],
};
