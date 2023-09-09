import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import colors from '../../themes/colors';
import styles from './styles';
import {useSelector} from 'react-redux';

export const RenderFooter = (isLoadingMore: boolean) => {
  const Settings = useSelector((state: any) => state.userSettings);
  const Theme = Settings?.darkMode;
  return isLoadingMore ? (
    <View style={styles.container}>
      <ActivityIndicator
        size="small"
        color={Theme !== 'dark' ? colors.black : colors.white}
      />
    </View>
  ) : null;
};
