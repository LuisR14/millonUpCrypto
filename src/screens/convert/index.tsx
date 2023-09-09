/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import colors from '../../themes/colors';
import Margin from '../../components/margin';
import {useSelector} from 'react-redux';
import {CryptoProps} from '../../types/crypto';
import ChangeIcon from '../../assets/icons/change.svg';
import {CryptoSelectPicker} from '../../components/cryptoSelectPicker';

export const ConvertScreen = () => {
  const params = useRoute<any>();
  const cryptoValueParam = params?.params?.cryptoValue;
  const [cryptoFromValue, setcryptoFromValue] = useState('');
  const [items, setItems] = useState<any[]>([]);
  const [cryptoToValue, setcryptoToValue] = useState('');
  const [valueTo, setValueTo] = useState('1');
  const [valueFrom, setValueFrom] = useState(cryptoValueParam);
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const zIndex = 1;
  const borderBottomRadius = 0;
  const borderBottomRadiusClose = 8;
  const cryptoList = useSelector((state: any) => state.cryptoList);
  const Settings = useSelector((state: any) => state.userSettings);
  const Theme = Settings?.darkMode;

  useEffect(() => {
    if (cryptoList?.listBackup?.length > 0 && !cryptoValueParam) {
      setValueFrom(cryptoList?.listBackup[0].price_usd);
    }
  }, [cryptoList?.listBackup]);

  useEffect(() => {
    const cryptoListDropDown: React.SetStateAction<any[]> = [
      {
        id: 0,
        label: 'USD',
        value: '1',
        icon: () => (
          <Image
            source={{
              uri: 'https://coinicons-api.vercel.app/api/icon/usd',
            }}
            style={styles.cryptoIcon}
          />
        ),
      },
    ];
    cryptoList?.listBackup?.map((cryptoItem: CryptoProps) => {
      cryptoListDropDown.push({
        id: cryptoItem?.id,
        label: cryptoItem?.symbol,
        value: cryptoItem?.price_usd,
        icon: () => (
          <Image
            source={{
              uri: `https://coinicons-api.vercel.app/api/icon/${cryptoItem?.symbol?.toLowerCase()}`,
            }}
            style={styles.cryptoIcon}
          />
        ),
      });
    });
    setItems(cryptoListDropDown);
  }, []);

  useEffect(() => {
    const cryptoValueNumber = parseFloat(cryptoFromValue);
    const valueFromNumber = parseFloat(valueFrom);
    const valueToNumber = parseFloat(valueTo);
    if (cryptoFromValue) {
      if (valueToNumber === 1) {
        setcryptoToValue((cryptoValueNumber * valueFromNumber).toFixed(5));
      } else {
        setcryptoToValue(
          ((valueFromNumber / valueToNumber) * cryptoValueNumber).toFixed(5),
        );
      }
    } else {
      setcryptoToValue('0.00');
    }
  }, [cryptoFromValue, valueFrom, valueTo]);

  const onChangeOrder = () => {
    setValueFrom(valueTo);
    setValueTo(valueFrom);
  };

  return (
    <SafeAreaView testID="safeAreaViewTest" style={styles.container}>
      <Text
        testID="titleConvertScreenTest"
        style={{
          ...styles.textTitle,
          color: Theme !== 'dark' ? colors.black : colors.white,
        }}>
        Convert
      </Text>
      <View
        testID="viewTextInputTest"
        style={{
          ...styles.textInputContainer,
          zIndex,
          borderBottomLeftRadius: openFrom
            ? borderBottomRadius
            : borderBottomRadiusClose,
          backgroundColor: Theme !== 'dark' ? colors.lightGray : colors.gray,
        }}>
        <CryptoSelectPicker
          testID="selectPickerUp"
          editable={true}
          openFrom={openFrom}
          valueFrom={valueFrom}
          items={items}
          setOpenFrom={setOpenFrom}
          setValueFrom={setValueFrom}
          setItems={setItems}
          cryptoFromValue={cryptoFromValue}
          setcryptoFromValue={setcryptoFromValue}
        />
      </View>
      <Margin bottom={40} />
      <TouchableOpacity onPress={onChangeOrder}>
        <ChangeIcon fill={Theme !== 'dark' ? colors.black : colors.white} />
      </TouchableOpacity>
      <Margin bottom={20} />
      <View
        testID="viewTextInput2Test"
        style={{
          ...styles.textInputContainer,
          borderBottomLeftRadius: openTo
            ? borderBottomRadius
            : borderBottomRadiusClose,
          backgroundColor: Theme !== 'dark' ? colors.lightGray : colors.gray,
        }}>
        <CryptoSelectPicker
          testID="selectPickerDown"
          editable={false}
          openFrom={openTo}
          valueFrom={valueTo}
          items={items}
          setOpenFrom={setOpenTo}
          setValueFrom={setValueTo}
          setItems={setItems}
          cryptoFromValue={cryptoToValue}
        />
      </View>
    </SafeAreaView>
  );
};
