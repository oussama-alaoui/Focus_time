import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/utilis/colors';
import Focus from './src/features/Focus';
export default function App() {
  return (
    <Focus />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.dark,
  },
}); 