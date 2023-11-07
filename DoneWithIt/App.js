import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello to my first react native app:) yuhooo! no matter what happens that's it. bahala na</Text>
      
    </SafeAreaView>
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
