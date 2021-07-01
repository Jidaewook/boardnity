import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList} from 'react-native'
import axios from 'axios';

import {COLORS, theme} from '../../consts/'

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

const NcsSectionStack = () => {

    const [ncsList, setNcsList] = useState([])

    const getList = async () => {
        await axios.get(`http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs/`)
                    .then(res => {
                        setNcsList(res.data.results)
                        console.log(res.data.results)
                    })
                    .catch(err => {
                        console.log(err)
                    })
    }

    useEffect(() => {
        getList()
    }, [])

    return (
        <View style={{height: '100%'}}>
            <FlatList 
                showVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={
                    <View style={{height: 150, width: '100%', backgroundColor: 'red'}}>
                        <Text>
                            광고이미지
                        </Text>
                    </View>
                }
                data={ncsList}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => (
                    <View style={styles.item1}>
                    <Image 
                        style={[styles.basicImg, {width: '50%', height: '40%', resizeMode: 'stretch', marginTop: 5, marginRight: 5}]}
                        
                        source={require('../../assets/NcsSection/meteor.png')}
                    />
                    <View style={styles.cardContent}>
                        <Text style={[styles.cardTitle, {color: "white"}]}>
                            {item.title}
                        </Text>
                        <Text style={[styles.cardSubTitle, {color: "white"}]}>
                            {item.desc}
                        </Text>
                    </View>
                    <View style={styles.cardFooterWrapper}>
                        <View />
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.cardBtn,
                                    {backgroundColor: "white"}
                                ]}
                                onPress = {() => navigation.navigate("CommunicationList")}
                            >
                                <Text style={styles.btnLabel}>
                                    바로가기
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                )}
            />
        </View>
        
    );
};

export default NcsSectionStack;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.white
    },
    heading: {
        fontSize: theme.sizes.h1,
        fontWeight: 'bold',
        color: COLORS.black,
        marginTop: 5
    },  
    subHeading: {
        fontSize: theme.sizes.h4,
        fontWeight: 'bold',
        color: COLORS.gray,
        marginTop: 5
    },
    sectionWrapper1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    item1: {
        backgroundColor: COLORS.gray,
        flex: 1,
        margin: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        height: 200,

    }
})