import React, { JSX } from 'react';

import { View, Text, StyleSheet, useColorScheme } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

function AppPro(): JSX.Element {
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#40c2ba' }}>Basant Chauhan</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppPro;
