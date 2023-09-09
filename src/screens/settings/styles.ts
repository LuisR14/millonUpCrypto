import {StyleSheet} from 'react-native';
import {dimension} from '../../themes/dimension';
import fontSize from '../../themes/fontSize';
import colors from '../../themes/colors';
const {horizontalScale, verticalScale} = dimension();

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textTitle: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: fontSize.xlarge,
  },
  textSubTitle: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    fontSize: fontSize.large,
    color: colors.black,
  },
  textSwitch: {
    paddingHorizontal: 10,
    fontSize: fontSize.normal,
    color: colors.black,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  settingComponent: {
    width: horizontalScale(330),
    height: verticalScale(60),
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
});
