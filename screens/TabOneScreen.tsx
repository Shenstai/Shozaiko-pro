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
        <Image style={styles.image} source={require('../src/images/shozaiko.png')} />
        <Text style={styles.descText}>Welcome to Shozaiko!</Text>
        <Text style={styles.descText}>ようこそ！</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('NoveList')} style={styles.startButton}>
        <Text style={styles.startText}>START NOW!</Text>
      </TouchableOpacity>
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
  startButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    marginBottom: 100,
    position: 'absolute',

  },
  startText: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  descText:{
    fontWeight: 'bold',
    fontSize: 18,
  }
});
