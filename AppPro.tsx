import React, { JSX } from 'react';

import { View, Text, StyleSheet, useColorScheme } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.textStyles}>Basant Chauhan</Text>
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
  textStyles: {
    color: '#fbbf24',
  },
});

export default AppPro;
