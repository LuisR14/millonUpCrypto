import React, {memo} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Margin from '../margin';
import {useSelector} from 'react-redux';
import colors from '../../themes/colors';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {CryptoComponentProps} from '@app/types/cryptoComponent';

const CrytoComponent = ({cryptoItem, scrollY, index}: CryptoComponentProps) => {
  const HEIGHT = 112;
  const Settings = useSelector((state: any) => state.userSettings);
  const Theme = Settings?.darkMode;
  const inputRange = [-1, 0, HEIGHT * index, HEIGHT * (index + 2)];
  const inputRangeOpacity = [-1, 0, HEIGHT * index, HEIGHT * (index + 0.7)];

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, inputRange, [1, 1, 1, 0]);
    const opacity = interpolate(scrollY.value, inputRangeOpacity, [1, 1, 1, 0]);

    return {
      transform: [{scale}],
      opacity,
    };
  });

  return cryptoItem ? (
    <Animated.View
      style={[
        {
          ...styles.cryptoComponent,
          backgroundColor: Theme !== 'dark' ? colors.lightBlue : colors.white,
        },
        animatedStyles,
      ]}>
      <Text style={styles.textCryptoSubtitle}>Ranking: {cryptoItem?.rank}</Text>
      <View
        style={{
          ...styles.separator,
          backgroundColor: Theme !== 'dark' ? colors.gray : colors.darkMode,
        }}
      />
      <View style={styles.cryptoComponentContainer}>
        <Image
          source={{
            uri: `https://coinicons-api.vercel.app/api/icon/${cryptoItem?.symbol?.toLowerCase()}`,
          }}
          style={styles.cryptoIcon}
        />
        <View>
          <Text style={styles.textCrypto}>{cryptoItem?.name}</Text>
          <Margin bottom={2} />
          <Text style={styles.textCryptoSubtitle}>
            ${cryptoItem?.price_usd}
          </Text>
        </View>
        <View>
          <Text style={styles.textCrypto}>{cryptoItem?.symbol}</Text>
          <Margin bottom={2} />
          <Text
            style={
              Math.sign(parseFloat(cryptoItem?.percent_change_24h)) === -1
                ? {
                    ...styles.textCryptoChangeNegative,
                    color: Theme !== 'dark' ? colors.red : colors.orange,
                  }
                : {
                    ...styles.textCryptoChangePositive,
                    color: Theme !== 'dark' ? colors.green : colors.cyan,
                  }
            }>
            {Math.sign(parseFloat(cryptoItem?.percent_change_24h)) === -1
              ? `${cryptoItem?.percent_change_24h}%`
              : `+${cryptoItem?.percent_change_24h}%`}
          </Text>
        </View>
      </View>
    </Animated.View>
  ) : (
    <View />
  );
};

export default memo(CrytoComponent);
