export interface CryptoSelectPickeProps {
  testID?: string;
  editable: boolean;
  openFrom: boolean;
  valueFrom: any;
  items: any[];
  setOpenFrom: React.Dispatch<React.SetStateAction<boolean>>;
  setValueFrom: React.Dispatch<any>;
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
  cryptoFromValue: string;
  setcryptoFromValue?: React.Dispatch<React.SetStateAction<string>>;
}
