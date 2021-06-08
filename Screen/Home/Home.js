import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, } from 'react-native';

import axios from 'axios';

const Home = () => {

    const [movies, setMovies] = useState([])

    const getMovie = async() => 
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=262cfbaa555730595d97bf7a4c956d2a&language=en-US&page=1')
            .then(res => {
                console.log(res)
                setMovies(res.data.results)
            })
            .catch(err => {
                console.log(err)
            });

    useEffect(() => {
        getMovie()
    }, [])
    

    return (
        <View>
            {movies.map(item => (
                <Text>
                    {item.title}
                </Text>
            ))}
        </View>
    );
};

export default Home;