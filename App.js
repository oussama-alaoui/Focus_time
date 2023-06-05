import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/utilis/colors';
import Focus from './src/features/Focus';
import { useState } from 'react';
import { fontSizes, spacing } from './src/utilis/sizes';


export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!focusSubject ? <Focus setFocusSubject={setFocusSubject} focusSubject={focusSubject} /> : <Text>Here</Text>}
      {/* <Focus setFocusSubject={setFocusSubject} focusSubject={focusSubject} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text_style: {
    color: colors.light,
  },
});
