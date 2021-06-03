import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screen/Home';
import axios from 'axios';

const [movie, setMovie] = useState([]);

const getMovie = async() => {
  axios.get('https://api.themoviedb.org/3/movie/550?api_key=262cfbaa555730595d97bf7a4c956d2a')
    .then(res => {
      console.log(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
}

useEffect(() => {
  getMovie()
}, []);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
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