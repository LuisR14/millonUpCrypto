import React, {useState} from 'react';
import {SafeAreaView, Switch, View} from 'react-native';
import {Text} from 'react-native';
import styles from './styles';
import Margin from '../../components/margin';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserTheme} from '../../redux/userSettingSlice';
import {saveUserTheme} from '../../functions/saveUserTheme';
import colors from '../../themes/colors';

export const SettingsScreen = () => {
  const dispatch = useDispatch();
  const Settings = useSelector((state: any) => state.userSettings);
  const Theme = Settings?.darkMode;
  const Offline = Settings?.offline;
  const [switchValue, setswitchValue] = useState(
    Theme === 'dark' ? true : false,
  );
  const onChangeSwitch = (value: boolean) => {
    if (value) {
      setswitchValue(true);
      dispatch(updateUserTheme('dark'));
      saveUserTheme('dark');
    } else {
      setswitchValue(false);
      dispatch(updateUserTheme('light'));
      saveUserTheme('light');
    }
  };

  return (
    <SafeAreaView testID="safeAreaViewTest" style={styles.container}>
      <Text
        testID="textTitleTest"
        style={{
          ...styles.textTitle,
          color: Theme !== 'dark' ? colors.black : colors.white,
        }}>
        Settings
      </Text>
      <Margin bottom={20} />
      <View
        style={{
          ...styles.settingComponent,
          backgroundColor: Theme !== 'dark' ? colors.lightBlue : colors.white,
        }}>
        <Text testID="darkModeTextSettingTest" style={styles.textSubTitle}>
          Dark mode
        </Text>
        <View testID="viewSwitch1Test" style={styles.switchContainer}>
          <Switch
            testID="switch1Test"
            onValueChange={value => onChangeSwitch(value)}
            value={switchValue}
          />
        </View>
      </View>
      <View
        style={{
          ...styles.settingComponent,
          backgroundColor: Theme !== 'dark' ? colors.lightBlue : colors.white,
        }}>
        <Text testID="offlineModeTextSettingTest" style={styles.textSubTitle}>
          Offline mode
        </Text>
        <View testID="viewSwitch2Test" style={styles.switchContainer}>
          <Switch testID="switch2Test" disabled={true} value={Offline} />
        </View>
      </View>
    </SafeAreaView>
  );
};
