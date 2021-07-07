import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';

import axios from 'axios';

import {AntDesign} from '@expo/vector-icons';
import {COLORS, theme} from '../../consts';
import { useNavigation } from '@react-navigation/core';

import {Card, Button, Title, Paragraph} from 'react-native-paper';

const Mypage = () => {
    const navigation = useNavigation();

    const [recent, setRecent] = useState([])
    const [likes, setLikes] = useState([])



    const getRecent = async() => 
        await axios.get(`http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs`)
                .then(res => {
                    setRecent(res.data.results)
                    console.log(res.data.results)
                })
                .catch(err => {
                    console.log(err)
                });

    useEffect(() => {
        getRecent()
    }, [])

    return (
        <View style={styles.profile}>
           <View style={{display: 'flex'}}>
                <ImageBackground
                    source={require('../../assets/profileVoodoo.jpeg')}
                    style={styles.profileContainer}
                    imageStyle={styles.profileBackground}
                >
                    <View style={styles.editGear}>
                        <AntDesign name="edit" size={24} color={COLORS.white} onPress={() => navigation.navigate("MyPageEdit")} />
                        <AntDesign name="setting" size={24} color={COLORS.white} onPress={() => navigation.navigate("Setting")} />                        
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{width: '100%', marginTop: '20%'}}
                    >
                        <View style={styles.profileCard}>
                            <View style={styles.avatarContainer}>
                                <Image 
                                    source={require('../../assets/avatar.jpeg')}
                                    style={styles.avatar}
                                />
                            </View>
                            <View style={styles.info}>
                                <View style={{marginTop: 20, paddingBottom: 24, flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={styles.activeInfo}>
                                            5th
                                        </Text>
                                        <Text style={{fontSize: 12, color: COLORS.black}}>
                                            My Connection
                                        </Text>
                                    </View>
                                    <View style={{alignItems: 'center' }}>
                                        <Text style={styles.activeInfo}> 
                                            2,700
                                        </Text>
                                        <Text style={{fontSize: 12, color: COLORS.black}}>
                                            Likes
                                        </Text>
                                    </View>
                                    <View style={{alignItems: 'center' }}>
                                        <Text style={styles.activeInfo}> 
                                            134
                                        </Text>
                                        <Text style={{fontSize: 12, color: COLORS.black}}>
                                            Views
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{display: 'flex'}}>
                                <View style={styles.nameInfo}>
                                    <Text style={{fontSize: theme.sizes.h1, color: COLORS.gray, fontWeight: 'bold'}}>
                                        관리자, 35
                                    </Text>
                                    <Text style={{fontSize: theme.sizes.h3, color: COLORS.gray2, marginTop: 15, fontWeight: '600'}}>
                                        경기도 부천, 대한민국
                                    </Text>
                                </View>
                            </View>
                            <View style={{marginTop: 20, marginBottom: 15}}>
                                <View stlye={styles.divider}/>
                                <View style={{marginTop: 15}}>
                                    <Text style={{fontSize: theme.sizes.h3, color: COLORS.gray, textAlign: 'center'}} >
                                        안녕하세요, 자기소개 원투쓰리
                                    </Text>
                                </View>
                                <View stlye={[styles.divider, {marginTop: 20}]} />
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: theme.sizes.h5, color: COLORS.gray, marginTop: 15}} >
                                        최근에 본 영상
                                    </Text>
                                    <TouchableOpacity>
                                        <Text style={{color: COLORS.gray, fontSize: theme.sizes.h5, marginTop: 20, marginRight: 5}}>
                                            전체 보기
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView horizontal={true} style={{marginTop: 10}} showsHorizontalScrollIndicator={false}>
                                    {recent.map(item => (
                                        <Card style={{margin: 10, width: 250, borderWidth: 1}}>
                                            <Card.Cover source={require('../../assets/favicon.png')} />
                                            <Card.Content>

                                                <Title>
                                                    {item.title.length > 10 ? `${item.title.slice(0, 10)}...` : item.title }
                                                </Title>

                                                <Paragraph>
                                                    {item.genres_ids}
                                                </Paragraph>
                                            </Card.Content>
                                        </Card>
                                    ))}
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
           </View>
        </View>
    );
};

export default Mypage;

const styles = StyleSheet.create({
    profile: {
        display: 'flex',
        marginTop: 0
    }, 
    profileContainer: {
        width: '100%',
        height: '100%',
        padding: 0,
        zIndex: 1
    },
    profileBackground: {
        width: '100%',
        height: '50%'
    },
    editGear: {
        paddingTop: 50,
        marginBottom: -50,
        marginLeft: 20,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileCard: {
        display: 'flex',
        padding: 15,
        marginHorizontal: 15,
        marginTop: 65,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 0.2
    },
    avatarContainer: {
        position: 'relative',
        marginTop: -80,
        alignItems: 'center'
    },
    avatar: {
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 0,
        alignItems: 'center'
    },
    info: {
        paddingHorizontal: 40,
    },
    activeInfo: {
        fontSize: theme.sizes.h2,
        color: COLORS.gray,
        fontWeight: 'bold',
        marginTop: 4,
        marginBottom: 10
    },
    nameInfo: {
        alignItems: 'center',
        marginTop: 15,
    }, 
    divider: {
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.black
    },
    cardTitle: {
        fontSize: theme.sizes.h4,
        fontWeight: 'bold'
    }
})