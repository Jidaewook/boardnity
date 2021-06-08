import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {View, Text} from 'react-native';

const App = () => {

  // 상태선언
  const [movie, setMovie] = useState([]);
  // 함수선언
  const getData = async() => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=262cfbaa555730595d97bf7a4c956d2a&language=en-US&page=1')
      .then(res => {
        console.log("11112451234123412341234123412341234", res.data.results)
        setMovie(res.data.results);
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {movie.map(item => (
        <Text>
          {item.title}
        </Text>
        
      ))}
    </View>
  );
};

export default App;