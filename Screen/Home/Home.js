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
    const [bests, setBests] = useState([])
    const [bbs, setBbs] = useState([])

    const categories = ['모두보기', 'NCS', 'PSAT', '고득점특강', '채용공고', '물뿌리개'];
    const [selectCategoryIndex, setSelectCategoryIndex] = useState(0)
    const [activeCardIndex, setActiveCardIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;

    const getMovie = async() => 
       await axios.get('http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs')
                .then(res => {
                    setMovies(res.data.results)
                    console.log(res.data.results)
                })
                .catch(err => {
                    console.log(err)
                });

    const getBest = async() => 
        await axios.get('http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/psat')
                .then(res => {
                    setBests(res.data.results)
                })
                .cathch(err => {
                    console.log(err)
                })

    const getBbs = async() => 
        await axios.get('http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/bbs')
                .then(res => {
                    setBbs(res.data.results)
                })
                .catch(err => {
                    console.log(err)
                })


    useEffect(() => {
        getMovie(),
        getBest(),
        getBbs()
    }, [])
    

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={styles.header}>
                <View style={{paddingBottom: 15}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                        Find Your Lecture
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                            in{" "}
                        </Text>
                        <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.primary}}>
                            PASSME
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Mypage')} >
                    <MaterialIcons name={"person-outline"} size={32} color={COLORS.gray} />
                </TouchableOpacity>
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
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, marginLeft: 10}}>
                    NCS 강좌
                </Text>
                <ScrollView horizontal style={{marginTop: 10}} >
                    {movies.map(item => (
                        <Card style={{margin: 5, width: 250, borderWidth: 1}}>
                            {/* <Card.Cover source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} /> */}
                            <Card.Title style={styles.cardTitle} title={item.title} subtitle={item.genres_ids} />
                            <Card.Content>
                                <Title style={{fontSize: 12}}>{item.desc.slice(0, 20)}</Title>
                                {/* <Paragraph>{item.overview.slice(0, 100)}</Paragraph> */}
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => navigation.navigate('Detail', {id: item._id})}>자세히보기</Button>

                            </Card.Actions>
                        </Card>
                    ))}
                </ScrollView>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, marginLeft: 10}}>
                    PSAT 강좌
                </Text>
                <ScrollView horizontal style={{marginTop: 10}}>
                    {bests.map(item => (
                        <Card style={{margin: 5, width: 250, borderWidth: 1}}>
                            {/* <Card.Cover source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}/> */}
                            <Card.Title style={styles.cardTitle} title={item.title} subtitle={item.genres_ids} />
                            <Card.Content>
                                <Title style={{fontSize: 12}}>{item.desc.slice(0, 20)}</Title>
                                {/* <Paragraph>{item.overview.slice(0, 50)}</Paragraph> */}
                            </Card.Content>
                            
                            <Card.Actions>
                                {/* <Button onPress={() => navigation.navigate('Detail', {id: item.id})}>자세히보기</Button> */}
                                <Button onPress={() => navigation.navigate('Detail2')}>자세히보기</Button>

                            </Card.Actions>
                        </Card>
                    ))}
                </ScrollView>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, marginLeft: 10}}>
                    자유게시판
                </Text>
                <ScrollView horizontal style={{marginTop: 10}}>
                    {bbs.map(item => (
                        <Card style={{margin: 5, width: 250, borderWidth: 1}}>
                            {/* <Card.Cover source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}/> */}
                            <Card.Title style={styles.cardTitle} title={item.title} subtitle={item.tag} />
                            <Card.Content>
                                <Title style={{fontSize: 12}}>{item.desc.slice(0, 20)}</Title>
                                {/* <Paragraph>{item.overview.slice(0, 50)}</Paragraph> */}
                            </Card.Content>
                            
                            <Card.Actions>
                                <Button onPress={() => navigation.navigate('Detail', {id: item.id})}>자세히보기</Button>
                            </Card.Actions>
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
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',

    }
})