import colors from '../themes/colors';
import React from 'react';
import {Text, View} from 'react-native';

export const toastConfig = {
  success: internalState => (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 8,
        height: 40,
        backgroundColor: colors.white,
        borderRadius: 8,
        justifyContent: 'center',
      }}>
      <Text style={{alignSelf: 'center', color: 'white'}}>
        {internalState.text1}
      </Text>
    </View>
  ),
  info: () => {},
  error: internalState => {
    return (
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          alignSelf: 'center',
          height: 40,
          backgroundColor: colors.white,
          borderRadius: 8,
        }}>
        <Text style={{alignSelf: 'center', color: 'white', marginLeft: 5}}>
          {internalState.text1}
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 1,
          }}
        />
      </View>
    );
  },
};
