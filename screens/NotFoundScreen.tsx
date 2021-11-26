import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Homepage'>) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Image style={styles.image} source={{uri:'https://media1.giphy.com/media/W6dHvprT7oks6BpX5R/giphy.gif?cid=ecf05e47ov3rm813br1u9wuheiqytxvqah5q45spqo55idf7&rid=giphy.gif&ct=g'}}/>
    
    
      <Text style={styles.startText}></Text>
     <Text style={styles.startText}>Shozaiko is your best destination to</Text>
        <Text style={styles.startText}>keep track of all your</Text>
        <Text style={styles.startText}>favorite Japanese Light Novels.</Text>

        <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    top: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'transparent',


  },
  image: {
    marginBottom: 0,
    height: 200,
    width: 200,
  },
  
  startText: {
    fontWeight: 'bold'

  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
