import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'NoveList'>) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Summer Novels 2022</Text>

      <ScrollView style={styles.scroll1} horizontal > 

      <Image style={styles.images} source={require('../a1.jpg')}/>
      <Image style={styles.images} source={require("../a2.jpg")}/>
      <Image style={styles.images} source={require('../a3.jpg')}/>
      <Image style={styles.images} source={require('../a4.jpg')}/>
      
      </ScrollView>

     
      <Text style={styles.title}>Fall Novels 2022</Text>
      <ScrollView style={styles.scroll2} horizontal> 

      <Image style={styles.images} source={require('../b1.jpg')}/>
      <Image style={styles.images} source={require("../b2.jpg")}/>
      <Image style={styles.images} source={require('../b3.jpg')}/>
      <Image style={styles.images} source={require('../b4.jpg')}/>

      
      </ScrollView>
      <Text style={styles.title}>Winter Novels 2022</Text>
      <ScrollView style={styles.scroll3} horizontal> 

    <Image style={styles.images} source={require('../c1.png')}/>
    <Image style={styles.images} source={require("../c2.png")}/>
    <Image style={styles.images} source={require('../c3.png')}/>
    <Image style={styles.images} source={require('../c4.jpg')}/>


</ScrollView>
<Text style={styles.title}>Spring Novels 2022</Text>
<ScrollView style={styles.scroll4} horizontal> 

    <Image style={styles.images} source={require('../d1.jpg')}/>
    <Image style={styles.images} source={require("../d2.jpg")}/>
    <Image style={styles.images} source={require('../d3.jpg')}/>
    <Image style={styles.images} source={require('../d4.jpg')}/>


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
  
  image: {
    marginLeft: 16,
    marginRight: 16,
    top: -10,
    height: 150,
    width: 100,
   
 
  },

  images:{
    marginLeft: 16,
    marginRight: 16,
    bottom: 5,
    height: 150,
    width: 100,
    zIndex: 1,
   
  },

 title:{
  textAlign: 'center',
  fontWeight: 'bold',
 },
 


scroll1:{

  
  

},
scroll2:{
  


},

scroll3:{
  

},

scroll4:{
  

},



});
