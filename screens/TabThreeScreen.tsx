import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";


const movieURL = "https://mocki.io/v1/6eb7e6e4-682e-473e-8b53-29cdc8ebfebe";

const Movies = () => {
 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  
  useEffect(() => {
    fetch(movieURL)
      .then((response) => response.json()) 
      .then((json) => {
        setData(json.movies);
        setTitle(json.title);
        setDescription(json.description);
      })
      .catch((error) => alert(error)) 
      .finally(() => setLoading(false)); 
  }, []);

  
  async function getMoviesAsync() {
    try {
      let response = await fetch(movieURL);
      let json = await response.json();
      setData(json.movies);
      setTitle(json.title);
      setDescription(json.description);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {/* Title from URL */}
          <Text style={styles.title}>{title}</Text>
          {/* Display each movie */}
          <View style={{ borderBottomWidth: 2, marginBottom: 10 }}></View>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ paddingBottom: 10 }}>
                <Text style={styles.movieText}>
                  {item.id}. {item.title}, {item.releaseYear}
                </Text>
              </View>
            )}
          />
          {/* Show the description */}
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEFFFF',
   
    justifyContent: 'center',
  },
  movieText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "gray"
  },
  description: {
    textAlign: "center",
    marginBottom: 18,
    fontWeight: "200",
    color: "green",
  },
});

export default Movies;