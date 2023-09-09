import colors from '../../themes/colors';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector} from 'react-redux';
import styles from './styles';
import {TextInput} from 'react-native';
import {CryptoSelectPickeProps} from '@app/types/cryptoSelectPicker';

export const CryptoSelectPicker = ({
  testID,
  editable,
  openFrom,
  valueFrom,
  items,
  setOpenFrom,
  setValueFrom,
  setItems,
  cryptoFromValue,
  setcryptoFromValue,
}: CryptoSelectPickeProps) => {
  const Settings = useSelector((state: any) => state.userSettings);
  const Theme = Settings?.darkMode;
  return (
    <>
      <DropDownPicker
        testID={testID}
        listMode="MODAL"
        searchable={true}
        modalAnimationType="slide"
        modalContentContainerStyle={{
          backgroundColor: Theme !== 'dark' ? colors.lightGray : colors.gray,
        }}
        placeholder="Select"
        itemSeparator={true}
        searchPlaceholder="search here"
        searchPlaceholderTextColor={
          Theme !== 'dark' ? colors.black : colors.white
        }
        searchTextInputStyle={{
          color: Theme !== 'dark' ? colors.black : colors.white,
        }}
        textStyle={{
          color: Theme !== 'dark' ? colors.black : colors.white,
        }}
        searchContainerStyle={styles.dropDownSearchContainer}
        itemSeparatorStyle={{
          ...styles.dropDownItemSeparator,
          backgroundColor: Theme !== 'dark' ? colors.black : colors.white,
        }}
        dropDownContainerStyle={{
          ...styles.dropDownContainer,
          backgroundColor: Theme !== 'dark' ? colors.lightGray : colors.gray,
        }}
        style={{
          ...styles.dropDown,
          backgroundColor: Theme !== 'dark' ? colors.lightGray : colors.gray,
        }}
        containerStyle={styles.dropDownContainerStyle}
        open={openFrom}
        value={valueFrom}
        items={items}
        itemKey="id"
        setOpen={setOpenFrom}
        setValue={setValueFrom}
        setItems={setItems}
      />
      <TextInput
        editable={editable}
        keyboardType="decimal-pad"
        returnKeyType="done"
        style={{
          ...styles.textInput,
          color: Theme !== 'dark' ? colors.black : colors.white,
        }}
        placeholder="0.00"
        placeholderTextColor={Theme !== 'dark' ? colors.black : colors.white}
        value={cryptoFromValue}
        onChangeText={text => setcryptoFromValue(text)}
      />
    </>
  );
};
