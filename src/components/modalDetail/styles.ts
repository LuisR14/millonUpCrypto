import {Platform, StyleSheet} from 'react-native';
import {dimension} from '../../themes/dimension';
import colors from '../../themes/colors';
import fontSize from '../../themes/fontSize';
const {verticalScale, horizontalScale} = dimension();

export default StyleSheet.create({
  modalContainer: {
    marginTop: Platform.OS === 'ios' ? verticalScale(40) : verticalScale(10),
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textCrypto: {
    fontSize: fontSize.xlarge,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  textCryptoSubtitle: {
    fontSize: fontSize.large,
    color: colors.black,
    textAlign: 'center',
  },
  textCryptoChangeNegative: {
    fontSize: fontSize.large,
    color: colors.red,
    textAlign: 'center',
  },
  textCryptoChangePositive: {
    fontSize: fontSize.large,
    color: colors.green,
    textAlign: 'center',
  },
  subContainer: {alignItems: 'center'},
  cryptoIcon: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  closeIcon: {
    flex: 1,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  convertButton: {
    width: horizontalScale(150),
    height: verticalScale(45),
    backgroundColor: colors.gray,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  convertButtontext: {
    fontSize: fontSize.neutral,
    fontWeight: 'bold',
    color: colors.white,
  },
});
