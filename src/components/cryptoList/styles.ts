import {StyleSheet} from 'react-native';
import {dimension} from '../../themes/dimension';
import colors from '../../themes/colors';
import fontSize from '../../themes/fontSize';
const {horizontalScale} = dimension();

export default StyleSheet.create({
  cryptoComponent: {
    flex: 1,
    width: horizontalScale(330),
    height: 100,
    borderRadius: 10,
    marginVertical: 6,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    alignSelf: 'center',
  },
  cryptoComponentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCrypto: {
    fontSize: fontSize.neutral,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  textCryptoSubtitle: {
    fontSize: fontSize.neutral,
    color: colors.black,
    textAlign: 'center',
  },
  textCryptoChangeNegative: {
    fontSize: fontSize.neutral,
    color: colors.red,
    textAlign: 'center',
  },
  textCryptoChangePositive: {
    fontSize: fontSize.neutral,
    color: colors.green,
    textAlign: 'center',
  },
  cryptoIcon: {
    height: 50,
    width: 50,
  },
  separator: {
    height: 1,
    marginVertical: 5,
  },
});
