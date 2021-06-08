import React, {useEffect, useState, useRef} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, TextInput, FlatList, Animated} from 'react-native';

import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../consts/colors';
import {MaterialIcons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import CategoryList from '../../components/CategoryList';
import {Card, Button, Paragraph, Title} from 'react-native-paper';

const cardWidth = width / 1.8;
const {width} = Dimensions.get('screen');

const Home = () => {

    const navigation = useNavigation();

    const [movies, setMovies] = useState([])

    const categories = ['All', 'Upcoming', 'Popular', 'Toprated', 'Best', 'Worst'];
    const [selectCategoryIndex, setSelectCategoryIndex] = useState(0)
    const [activeCardIndex, setActiveCardIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;

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
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={styles.header}>
                <View style={{paddingBottom: 15}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                        Find Your Movie
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                            in{" "}
                        </Text>
                        <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.primary}}>
                            TMDB
                        </Text>
                    </View>
                </View>
                <MaterialIcons name={"person-outline"} size={32} color={COLORS.gray} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.searchInputContainer}>
                    <MaterialIcons name={"search"} size={28} style={{marginLeft: 20}} />
                    <TextInput placeholder={"Search"} style={{fontSize: 20, paddingLeft: 10}} />
                </View>
                <CategoryList 
                    categories={categories}
                    categoryIndex={selectCategoryIndex}     
                    set={setSelectCategoryIndex}               
                />
                <ScrollView horizontal style={{marginTop: 10}} >
                    {movies.map(item => (
                        <Card style={{margin: 5, width: 250, borderWidth: 1}}>
                            <Card.Cover source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} />
                            <Card.Title title={item.title} subtitle={item.release_date} />
                            <Card.Content>
                                <Title>{item.title}</Title>
                                <Paragraph>{item.overview.slice(0, 100)}</Paragraph>
                            </Card.Content>
                        </Card>
                    ))}
                </ScrollView>
            </ScrollView>
            
        </SafeAreaView>
        
    );
};

export default Home;

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        marginTop: 15,
        marginLeft: 20,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,

        flexDirection: 'row',
        alignItems: 'center'
    }
})