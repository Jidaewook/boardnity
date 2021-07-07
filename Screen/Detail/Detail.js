import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet, Dimensions, TouchableOpacity, ScrollView, FlatList, TextInput, Button} from 'react-native';
// import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import {theme, COLORS} from '../../consts/index';
import {Feather} from '@expo/vector-icons';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");


const Detail = ({route}) => {

    const {id} = route.params;

    const [Detail, setDetail] = useState({});
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState('주요내용');
    const tabs = ['주요내용', '관련영상', '관련기출', '질문&답변'];
    const [text, onChangeText] = React.useState('Useless Text');

    const renderTab = (tab) => {
        const isActive = active === tab;

        return(
            <TouchableOpacity
                key={`tab-${tab}`}
                onPress={() => handleTab(tab)}
                style={[styles.tab, isActive ? styles.active : null]}
            >
                <Text style={{fontSize: theme.sizes.h4, fontWeight: 'bold', color: isActive ? COLORS.black : COLORS.gray }}>
                    {tab}
                </Text>
            </TouchableOpacity>
        )
    }

    const handleTab = tab => {
        setActive(tab)
    }

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                onPress={() => alert(item.title)}
                style={{
                    marginLeft: 20, 
                    marginBottom: 20, 
                    backgroundColor: COLORS.white, 
                    height: 50, 
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Text style={{width: '90%'}}>
                    {item.title}
                </Text>
                <View style={{width: '10%'}}>
                    <Feather name="play-circle" size={theme.sizes.h1} color={COLORS.black} />
                </View>
            </TouchableOpacity>
        )
    }

    const renderComment = () => {
        return (
            <ScrollView style={{height: 500}}>
                    <View
                        style={{
                            borderWidth: 0.5,
                            borderColor: COLORS.gray,
                            marginTop: 5
                        }}
                    >
                        <Text
                            style={styles.CommentName}
                        >
                            작성자이름 
                        </Text>
                        <Text
                            style={styles.CommentFirst}
                        >
                            {/* {Detail.title} */}
                        </Text>
                        <View>
                            {/* <Text>
                                
                            </Text>
                            <Likes /> */}
                        </View>
                    </View>
                
            </ScrollView>
        )
    }
  
    const getDetail = async() => {
        await axios.get(`http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs/${id}`)
            .then(res => {
                setDetail(res.data.results)
                console.log("+++++++++++", res.data.results)
            })
            .catch(err => {
                console.log(err)
            });
    }

    const getData = async() => {
        await axios.get(`http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs/`)
                .then(res => {
                    setData(res.data.results)
                })
                .catch(err => {
                    console.log(err)
                });
    };

    useEffect(() => {
        getDetail(),
        getData()
    }, {})

    return (
        <>
            <SafeAreaView style={styles.Container}>
                <StatusBar backgroundColor="black"/>
                <View
                    style={{width: WIDTH, height: HEIGHT/3, backgroundColor: COLORS.tertiary}}
                >
                    {/* <YoutubePlayer
                        videoId={Detail.url} // The YouTube video ID
                        play // control playback of video with true/false
                        // fullscreen // control whether the video should play in fullscreen or inline
                        // loop // control whether the video should loop when ended
                        // onReady={e => this.setState({ isReady: true })}
                        // onChangeState={e => this.setState({ status: e.state })}
                        // onChangeQuality={e => this.setState({ quality: e.quality })}
                        // onError={e => this.setState({ error: e.error })}
                        style={{ alignSelf: 'stretch', height: 300 }}
                    /> */}
                </View>
                <View style={[styles.tabs]}>
                    {tabs.map(tab => renderTab(tab))}
                </View>
            </SafeAreaView>

            <View style={{backgroundColor: COLORS.white}}>
                {active === '주요내용' ? (
                    <ScrollView style={styles.Container}>
                        <View>
                            <Text style={styles.MainTitle}>
                                {Detail.title}
                            </Text>
                            <Text style={styles.MainDesc}>
                                {Detail.desc}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.slogan}>
                                각종 적성검사의 기본기를
                            </Text>
                            <Text style={styles.slogan}>
                                탄탄하게 다집니다!!
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.TeacherSub}>
                                | 경력
                            </Text>
                            <Text style={styles.MainDesc}>
                                8년(2014년 ~)
                            </Text>
                            <Text style={styles.TeacherSub}>
                                | 전공
                            </Text>
                            <Text style={styles.MainDesc}>
                                경영학 박사과정
                            </Text>
                            <Text style={styles.TeacherSub}>
                                | 성적
                            </Text>
                            <Text style={styles.MainDesc}>
                                2012년 자료해석 90점,{"\n"}
                                '13~'18 평균 85점 이상{"\n"}
                                LH 등 각종 기관 필기 합격{"\n"}{"\n"}
                            </Text>
                            <Text style={styles.TeacherSub}>
                                | 참여
                            </Text>
                            <Text style={styles.MainDesc}>
                                NCS 기출문제 출제위원{"\n"}
                                PSAT 전국 모의고사 출제위원{"\n"}
                            </Text>
                        </View>
                    </ScrollView>
                ) : (null)}
                {active === '관련영상' ? (
                    <FlatList
                        data={Data}
                        keyExtractor={(item) => item.title}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        style={{width: '90%', marginBottom: 10}}
                    />
                        
                ) : (null)}
                {active === '관련기출'}
                {active === '질문&답변' ? (
                    <View>
                        <View>
                            <Text style={styles.CommentTitle}>
                                질문과 답변
                            </Text>
                            <Text style={{marginTop: 20, marginHorizontal: 20, color: COLORS.gray}}>
                                질문에 대한 답변은 개인 쪽지로 드리거나 영상 콘텐츠로 제작되어 공개됩니다.
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput 
                                    style={styles.CommentInput}
                                    value={text}
                                    onChangeText={onChangeText}
                                />
                                <TouchableOpacity 
                                    style={styles.CommentBtn}
                                >
                                    <Text style={styles.CommentBtnTxt}>
                                        등록
                                    </Text> 
                                </TouchableOpacity>
                            </View>
                            {renderComment(Detail)}
                            {/* {renderComment(Detail.comments)} */}

                        </View>
                    </View>
                ) : (null)}
            </View>
        </>
    );
};

export default Detail;

const styles = StyleSheet.create({
    Container: {
        backgroundColor: COLORS.white,
        // justifyContent: 'center',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 10
    },
    tabs: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tab: {
        marginRight: 20,
        paddingVertical: 15
    },
    active: {
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 3
    }, 
    MainTitle: {
        marginLeft: 30,
        marginRight: 20,
        fontSize: theme.sizes.h3,
        fontWeight: 'bold', 
        color: theme.black
    }, 
    MainDesc: {
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        marginBottom: 14,
        color: COLORS.gray
    },  
    slogan: {
        fontSize: theme.sizes.h1,
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        color: COLORS.gray2,
        marginLeft: 25,
        marginTop: 10,
        marginRight: 25,
        textAlign: 'center'
    },
    TeacherSub: {
        fontSize: theme.sizes.h1,
        fontWeight: 'bold',
        color: COLORS.black,
        marginLeft: 20,
        marginTop: 10,
        height: 30
    }, 
    CommentTitle: {
        marginLeft: 20,
        fontSize: theme.sizes.h3,
        fontWeight: 'bold',
        width: '20%'
    }, 
    CommentInput: {
        backgroundColor: COLORS.gray2,
        marginTop: 20,
        marginLeft: 20,
        height: 35,
        width: '70%'
    }, 
    CommentBtn: {
        backgroundColor: COLORS.black,
        width: '15%',
        marginLeft: 10,
        height: 35,
        marginTop: 20,
        justifyContent: 'center',
    },
    CommentBtnTxt: {
        color: COLORS.white,
        fontSize: theme.sizes.h3,
        textAlign: 'center',
    },
    CommentName: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: theme.sizes.h3,
        fontWeight: 'bold'
    },
    CommentFirst: {
        marginBottom: 15,
        marginLeft: 30,
        fontSize: theme.sizes.h4,
        width: '85%',
        marginTop: 10
    }
})