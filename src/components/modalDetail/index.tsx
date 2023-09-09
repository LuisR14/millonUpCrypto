import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Margin from '../margin';
import styles from './styles';
import CloseIcon from '../../assets/icons/close.svg';
import NoImage from '../../assets/icons/No_image_available.png';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import colors from '../../themes/colors';
import {ModalDetailProps} from '@app/types/modalDetails';

export const ModalDetailComponent = ({
  cryptoItem,
  setmodalDetail,
}: ModalDetailProps) => {
  const Settings = useSelector((state: any) => state.userSettings);
  const Theme = Settings?.darkMode;
  const Offline = Settings?.offline;
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        ...styles.modalContainer,
        backgroundColor: Theme !== 'dark' ? colors.lightBlue : colors.lightGray,
      }}>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => setmodalDetail(false)}>
        <CloseIcon
          stroke={Theme !== 'dark' ? colors.lightGray : colors.white}
        />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Margin bottom={15} />
        <Image
          source={
            !Offline
              ? {
                  uri: `https://coinicons-api.vercel.app/api/icon/${cryptoItem?.symbol?.toLowerCase()}`,
                }
              : NoImage
          }
          style={styles.cryptoIcon}
        />
        <Margin bottom={20} />
        <Text style={styles.textCrypto}>{cryptoItem.symbol}</Text>
        <Margin bottom={10} />
        <Text style={styles.textCrypto}>${cryptoItem.price_usd}</Text>
        <View style={styles.subContainer}>
          <Margin bottom={5} />
          <Text style={styles.textCryptoSubtitle}>Ranking</Text>
          <Text style={styles.textCryptoSubtitle}>{cryptoItem.rank}</Text>
          <Text style={styles.textCryptoSubtitle}>Percent change 24h</Text>
          <Text
            style={
              Math.sign(parseFloat(cryptoItem.percent_change_24h)) === -1
                ? {
                    ...styles.textCryptoChangeNegative,
                    color: Theme !== 'dark' ? colors.red : colors.orange,
                  }
                : {
                    ...styles.textCryptoChangePositive,
                    color: Theme !== 'dark' ? colors.green : colors.cyan,
                  }
            }>
            {Math.sign(parseFloat(cryptoItem.percent_change_24h)) === -1
              ? `${cryptoItem.percent_change_24h}%`
              : `+${cryptoItem.percent_change_24h}%`}
          </Text>
          <Margin bottom={5} />
          <Text style={styles.textCryptoSubtitle}>Percent change 1h</Text>
          <Text
            style={
              Math.sign(parseFloat(cryptoItem.percent_change_1h)) === -1
                ? {
                    ...styles.textCryptoChangeNegative,
                    color: Theme !== 'dark' ? colors.red : colors.orange,
                  }
                : {
                    ...styles.textCryptoChangePositive,
                    color: Theme !== 'dark' ? colors.green : colors.cyan,
                  }
            }>
            {Math.sign(parseFloat(cryptoItem.percent_change_1h)) === -1
              ? `${cryptoItem.percent_change_1h}%`
              : `+${cryptoItem.percent_change_1h}%`}
          </Text>
          <Margin bottom={5} />
          <Text style={styles.textCryptoSubtitle}>Percent change 7d</Text>
          <Text
            style={
              Math.sign(parseFloat(cryptoItem.percent_change_7d)) === -1
                ? {
                    ...styles.textCryptoChangeNegative,
                    color: Theme !== 'dark' ? colors.red : colors.orange,
                  }
                : {
                    ...styles.textCryptoChangePositive,
                    color: Theme !== 'dark' ? colors.green : colors.cyan,
                  }
            }>
            {Math.sign(parseFloat(cryptoItem.percent_change_7d)) === -1
              ? `${cryptoItem.percent_change_7d}%`
              : `+${cryptoItem.percent_change_7d}%`}
          </Text>
          <Margin bottom={5} />
          <Text style={styles.textCryptoSubtitle}>Market cap usd</Text>
          <Text style={styles.textCryptoSubtitle}>
            ${cryptoItem.market_cap_usd}
          </Text>
          <Margin bottom={5} />
          <Text style={styles.textCryptoSubtitle}>Volume24h</Text>
          <Text style={styles.textCryptoSubtitle}>
            ${cryptoItem.volume24.toFixed(2)}
          </Text>
          <Margin bottom={5} />
          <Text style={styles.textCryptoSubtitle}>Total supply</Text>
          <Text style={styles.textCryptoSubtitle}>${cryptoItem.tsupply}</Text>
          <Margin bottom={20} />
          <TouchableOpacity
            testID="buttonModal"
            onPress={() => {
              setmodalDetail(false);
              navigation.navigate('Convert', {
                cryptoValue: cryptoItem.price_usd,
              });
            }}
            style={styles.convertButton}>
            <Text style={styles.convertButtontext}>CONVERT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
