import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  Image,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  View,
  Dimensions
} from 'react-native';
export default function App() { 
  const handlePress = () => console.log("Text pressed")
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: '30%'
      }}>
        <Text numberOfLines={1} onPress={handlePress}> Hello to my first react native app:)
        </Text>
        <TouchableHighlight onPress={()=> console.log("Image tapped")}>
          <Image 
            blurRadius={2}
            fadeDuration={3000}
            borderRadius={30}
            source={{ 
              width: 200,
              height: 300,
              uri: "https://picsum.photos/id/1/200/300"
              }} 
            /> 
        </TouchableHighlight>
        <Button 
        color="orange"
          title="Click Me" 
          onPress={()=> 
            Alert.alert("Hallo!", "Geht's dir gut?", [
              {text:"Ja", onPress: () => console.log("Ja")},
              {text: "Nein", onPress: () => console.log("Nein")}
            ])
            // Alert.prompt("Hallo", "wie geht's'?", text => console.log(text))
          }
        />
      </View>
    </SafeAreaView>
  );
}

const containerStyle= { backgroundColor: "dodgerblue"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});
