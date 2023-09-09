import {StyleSheet} from 'react-native';
import {dimension} from '../../themes/dimension';
import colors from '../../themes/colors';
import fontSize from '../../themes/fontSize';
const {horizontalScale, verticalScale} = dimension();

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    height: verticalScale(40),
    marginTop: 20,
    borderRadius: 8,
    flexDirection: 'row',
    width: horizontalScale(330),
    backgroundColor: colors.lightGray,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: colors.black,
    fontSize: fontSize.neutral,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  textFilters: {
    padding: 10,
    textAlign: 'center',
    fontSize: fontSize.normal,
    fontWeight: 'bold',
    color: colors.black,
  },
  filtersButton: {
    width: horizontalScale(100),
    borderRadius: 10,
    backgroundColor: colors.lightGray,
  },
  touchable: {
    width: horizontalScale(330),
    borderRadius: 10,
  },
  touchableIconSearch: {
    alignSelf: 'center',
  },
  flatlistContainer: {
    alignItems: 'center',
  },
});
