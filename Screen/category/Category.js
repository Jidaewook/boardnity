import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
// import moment from 'moment';
// import Moment from 'react-moment';

import {COLORS, theme} from '../../consts';
import BadgePill from '../../components/BadgePill';


const Category = () => {
    const navigation = useNavigation();

    const categories = ['공지사항', '자유게시판', '질문게시판']
    
    const [active, setActive] = useState('공지사항');

    const [loading, setLoading] = useState(true);

    const [bbs, setBbs] = useState([]);

    const getBbsData = async() => {
        await axios.get(`http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/bbs`)
                .then(res => {
                    console.log('$$$$$$$$$$$$$$$', res.data.results)
                    setBbs(res.data.results)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                });
    }

    useEffect(() => {
        getBbsData();
        console.log('!!!!!!!!', bbs)
    }, [])

    const renderCategory = (category) => {
        const isActive = active === category;
        return (
            <TouchableOpacity
                key={`category-${category}`}
                onPress={() => handleCategory(category)}
                style={[styles.category, isActive ? styles.active : null]}
            >
                <Text style={{fontSize: theme.sizes.h4, fontWeight: 'bold', color: isActive ? COLORS.primary : COLORS.black }}>
                    {category}
                </Text>
            </TouchableOpacity>
        )
    }

    const handleCategory = category => {
        console.log(category)
        const filtered = bbs.filter(item => 
            console.log("filterItem", item)    
        );
        console.log("filtered", filtered)
        setActive(category)
        setBbs(filtered)
    }

    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.categories}>
                {categories.map(category => renderCategory(category))}
            </View>
            <View style={{backgroundColor: COLORS.light}}>
                {bbs.map(item => (
                        <TouchableOpacity>
                            <View style={styles.bbsList}>
                                <View style={{flexDirection: 'row'}}> 
                                    {item.tag.map(t => (
                                        <View style={{paddingLeft: 10}}>
                                            <BadgePill
                                                title={"#"+t}
                                                textStyle={[styles.badgePill, {paddingVertical: 5, paddingHorizontal: 10, opacity: 1 }]}
                                            />
                                        </View>
                                    ))}
                                </View>
                                {/* <Moment from={Date.now()} element={Text} style={{color: COLORS.gray, fontSize: theme.sizes.h5}}>
                                    {item.createdAt}
                                </Moment> */}
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={[styles.titleStyle, {width: '65%'}]}>
                                    {item.title}
                                </Text>
                            </View>
                            
                        </TouchableOpacity>
                ))}
            </View>

        </SafeAreaView>
    );
};

export default Category;

const styles = StyleSheet.create({
    category: {
        marginRight: 20,
        paddingVertical: 15
    },
    active: {
        borderBottomColor: COLORS.black,
        borderBottomWidth: 3
    },
    safeView: {

    },
    categories: {
        borderBottomColor: COLORS.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 1,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    bbsList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingRight: 10

    }, 
    titleStyle: {
        fontSize: theme.sizes.h4,
        letterSpacing: -.72,
        fontWeight: '500',
        color: COLORS.black,
        paddingVertical: 10,
        marginHorizontal: 15
    },
    badgePill: {
        fontSize: theme.sizes.h5,
        letterSpacing: -0.6,
        color: COLORS.black,
        opacity: .5
    }
})