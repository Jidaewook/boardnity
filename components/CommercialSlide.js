import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { COLORS } from '../consts';

const {width, height} = Dimensions.get("window");


const CommercialSlide = ({src, title, desc}) => {


    return (
        
        <View  style={styles.Container}>
            {/* <Text>
                {title}
            </Text> */}
            {/* <ImageBackground
                style={styles.MainSlide}
                source={src}
            /> */}
            <View style={{flexDirection: 'row', width:  '100%', height: '100%'}}>
                <Image 
                    style={styles.thumbnail}
                    source={src}

                />
                <View style={{width: '100%', height: '50%'}}>
                    <Text>
                        {title}
                    </Text>
                    <Text>
                        {desc}
                    </Text>
                </View>
            </View>
        </View>
            
            
        
    );
};

export default CommercialSlide;

const styles = StyleSheet.create({
    Container: {
        width:  width,
        backgroundColor: COLORS.gray5,
        // flexDirection: 'row',
        height: height
    },
    MainSlide: {
        width: '50%',
        height: '100%',
        // backgroundColor: 'black',
        opacity: 0.1,
        position: 'absolute'
    },
    thumbnail: {
        width: '75%',
        height: '15%',
        margin: 10,
        backgroundColor: 'gray',
        resizeMode: 'stretch'
    }
})