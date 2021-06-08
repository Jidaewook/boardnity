import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Slide = ({src, title, desc}) => {

    const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

    return (
        <ScrollView
            horizontal
        >
            <View  style={styles.Container}>
                <ImageBackground
                    style={styles.MainSlide}
                    source={{uri: src}}
                />
                <View style={{flexDirection: 'row', width:  '100%', height: '100%'}}>
                    <Image 
                        style={styles.thumbnail}
                        source={{uri: src}}

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
        </ScrollView>
        
    );
};

export default Slide;

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 100
    },
    MainSlide: {
        width: '100%',
        height: '90%',
        backgroundColor: 'black',
        opacity: 0.4,
        position: 'absolute'
    },
    thumbnail: {
        width: '50%',
        height: '50%',
        margin: 100,
        resizeMode: 'stretch'
    }
})