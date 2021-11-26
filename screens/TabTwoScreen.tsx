import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'NoveList'>) {
  return (
    <View style={styles.container}>
<Text style={styles.title}>Top 4 Novels of the Month</Text>
 
      <ScrollView style={styles.scroll4} horizontal> 
      
      
      <TouchableOpacity style={styles.button1}>
      <Text style={styles.startText}>My Hero Academia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>
      <Text style={styles.startText}>Solo Leveling</Text>
      </TouchableOpacity>

  <Image style={styles.images} source={require('../academia.jpg')}/>
  <Image style={styles.images} source={require("../sollolevelling.png")}/>
  
 
       </ScrollView>
       <ScrollView style={styles.scroll5} horizontal> 
      
      <TouchableOpacity style={styles.button1}>
      <Text style={styles.startText}>Kono-Suba</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>
      <Text style={styles.startText}>Classroom of the Elite</Text>
      </TouchableOpacity>

  <Image style={styles.images1} source={require('../konosuba.jpg')}/>
  <Image style={styles.images1} source={require("../classromelite.jpg")}/>
  
 
       </ScrollView>
      
   
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEFFFF',
   
    justifyContent: 'center',
  },

  content:{
    
    backgroundColor: 'transparent',
    justifyContent: 'center',

    position: 'absolute',
  },
  
  
  button1: {
    width: 150,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    top: 40,
    marginLeft: 26,
    position: 'absolute',
    zIndex: 1,
  },
  button2: {
    width: 150,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    top: 40,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 220,
    position: 'absolute',
    zIndex: 1,

  },
  button3: {
    width: 150,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: 320,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",   
    marginLeft: 5,
    textAlign: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  button4: {
    width: 150,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: 320,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",  
    marginLeft: 235,
    position: 'absolute',
    zIndex: 1,
  },

  startText: {
    textAlign: 'center',
    fontWeight: 'bold',
    
  },

  images:{
    marginLeft: 26,
    marginRight: 16,
    top: 95,
    height: 250,
    width: 150,
    zIndex: 1,
    
   
  },
  images1:{
    marginLeft: 26,
    marginRight: 16,
    top: 95,
    height: 250,
    width: 150,
    zIndex: 1,
    
   
  },

  scroll4:{
  top: 1,
  },
  scroll5:{
  bottom: 30,
  },
 
  title:{
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    top: 10,
   textAlign: 'center',
    fontSize: 20,
   },
});
