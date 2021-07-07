import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList, SafeAreaView} from 'react-native'
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';


import {COLORS, theme} from '../../consts/';
import CommercialSlide from '../../components/CommercialSlide';
import CategoryList from '../../components/CategoryList';


const NcsSectionStack = () => {

    const navigation = useNavigation();

    const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

    const [ncsList, setNcsList] = useState([])

    const ncsCategories = ['모두보기', '실전공략', '스킬스쿨', '매니지먼트'];
    const [selectNcsCategoryIndex, setSelectNcsCategoryIndex] = useState(0);
    
    // const [commercial, setCommercial] = useState([0]);

    const commercial = [
        {
            title: '1',
            src: require("../../assets/NcsSection/com1.png"),
            desc: '광고1'
        },
        {
            title: '2',
            src: require("../../assets/NcsSection/com2.png"),
            desc: '광고2'
        },
        {
            title: '3',
            src: require("../../assets/NcsSection/com3.png"),
            desc: '광고3'
        },
        
    ]
        
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
        <SafeAreaView style={{height: '100%'}}>
            <View>
                {/* <CategoryList 
                    categories={ncsCategories}
                    categoryIndex={selectNcsCategoryIndex}
                    set={setSelectNcsCategoryIndex}
                /> */}
                <FlatList 
                    showVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={
                        <ScrollView 
                            pagingEnabled={true} 
                            horizontal 
                            
                            showsHorizontalScrollIndicator={false}
                            style={{
                                height: 160, 
                                width: '100%', 
                                backgroundColor: 'red'
                            }}
                        >
                            {commercial.map(i => (
                                <CommercialSlide 
                                    title={i.title}
                                    src={i.src}
                                    desc={i.desc}
                                />
                            ))}                                
                        </ScrollView>
                        
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
                                    onPress = {() => navigation.navigate("Detail", {id: item._id})}
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
            
        </SafeAreaView>
        
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

    }, 
    btnLabel: {
        backgroundColor: COLORS.tertiary,
        justifyContent: 'center',
        textAlign: 'center',
        padding: 5,
        color: COLORS.main2,
        fontWeight: 'bold'
    }
})