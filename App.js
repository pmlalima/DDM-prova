import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pamela from './SRC/componets/Pamela/main';
import Ysabelli from './SRC/componets/Ysabelli';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
  <Pamela></Pamela>
  <Ysabelli></Ysabelli>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
