import {Dimensions, Platform, StyleSheet} from 'react-native';
import {dimension} from '../../themes/dimension';
import colors from '../../themes/colors';
import fontSize from '../../themes/fontSize';
const {horizontalScale, verticalScale} = dimension();
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textInputContainer: {
    height: verticalScale(70),
    marginTop: 20,
    borderRadius: 8,
    flexDirection: 'row',
    width: horizontalScale(330),
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: colors.black,
    fontSize: fontSize.mlarge,
  },
  textInputDisable: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: fontSize.large,
  },
  textTitle: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 20,
    color: colors.black,
    fontSize: fontSize.xlarge,
  },
  dropDown: {
    borderColor: colors.transparent,
  },
  dropDownContainerStyle: {
    width: horizontalScale(140),
  },
  dropDownContainer: {
    width: horizontalScale(130),
    borderTopColor: colors.transparent,
    borderWidth: 0.3,
    paddingVertical: 5,
    borderColor: colors.gray,
    marginLeft: height > 700 ? -9.9 : -9.5,
    marginTop:
      Platform.OS === 'android'
        ? height > 740
          ? 10
          : 7
        : height > 670
        ? 12
        : 4,
  },
  dropDownItemContainer: {
    paddingVertical: 10,
  },
  dropDownItemSeparator: {
    backgroundColor: colors.gray,
    marginVertical: 5,
  },
  dropDownSearchContainer: {
    marginBottom: 5,
  },
  cryptoIcon: {
    height: 40,
    width: 40,
  },
});
