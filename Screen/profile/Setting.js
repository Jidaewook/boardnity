import React from 'react';
import {View, Text, SectionList, StyleSheet, TouchableOpacity} from 'react-native';
import { Menu } from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {COLORS, theme} from '../../consts';

const MenuItem = [
    {
      title: '알람설정',
      data: [
        {title: '알람설정', icon: 'notification', screen: 'Alarm'}
      ],
    },
    {
      title: '개인정보',
      data: [
        {title: '개인정보정책', icon: 'user', screen: 'Privacy'},
        {title: '서비스이용약관', icon: 'copy1', screen: 'Service'}
      ],
    },
    {
      title: '고객센터',
      data: [
        {title: '서비스문의', icon: 'customerservice', screen: ''},
        {title: 'FAQ', icon: 'questioncircleo', screen: 'Frequency'},
        {title: '오류신고', icon: 'bells', screen: ''}
      ],
    },
    {
      title: '서비스정보',
      data: [
        {title: '버전정보', icon: 'ellipsis1', screen: 'Version'},
        {title: '구독문의', icon: 'creditcard', screen: ''}
      ],
    },
    {
      title: '계정설정',
      data: [
        {title: '로그아웃', icon: 'dingding', screen: ''},
        {title: '탈퇴문의', icon: 'phone', screen: ''},
        // {title: '      ', icon: '', screen: ''}
      ]
    }
]


const Setting = () => {

    const navigation = useNavigation();

    const moveScreen = (a) => {
        navigation.navigate(a)
    }

    return (
        <SectionList
            sections={MenuItem}
            renderItem={({item}) => (
                <TouchableOpacity 
                    style={styles.itemBox}
                    onPress={() => {
                        switch (item.title) {
                            case "서비스문의" :
                                // openOnPressMail();
                                alert("서비스문의")
                                break
                            case "오류신고" :
                                alert("오류신고")
                                break
                            case "로그아웃" : 
                                alert("로그아웃 하시겠습니까?")
                                break
                            case "탈퇴문의" : 
                                alert("탈퇴하시겠습니까?")
                                break
                            default :
                                moveScreen(item.screen)
                                break                                
                        }
                    }}
                > 
                    <View style={styles.icon}>
                        <AntDesign name={item.icon} size={theme.sizes.h3} color={COLORS.gray1} />    
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.item}>
                            {item.title}
                        </Text>
                    </View>
                    <View style={styles.right}>
                        {
                            item.title === '버전정보' ? (
                                <Text stlye={styles.right}>1.0.0</Text>
                            ) : (
                                item.title === '      ' ? (
                                    <Text></Text>
                                ) : (
                                    <AntDesign name="right" size={theme.sizes.h4} color={COLORS.gray4} /> 
                                )
                            )
                        }
                    </View>
                </TouchableOpacity>
            )}
            renderSectionHeader={({section}) => {
                
            }}
        />
    );
};

export default Setting;

const styles = StyleSheet.create({
    itemBox: {
        paddingLeft: 20,
        height: 50,
        fontSize: theme.sizes.h1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon: {
        width: '10%',
        marginLeft: 20,
        marginRight: -5,
        alignItems: 'flex-start',
        justifyContent: 'center'
        
    },
    item: {
        width: '75%',
        alignItems: 'flex-start',
        fontSize: theme.sizes.h3,
        color: COLORS.gray1,
        justifyContent: 'center'
    },
    right: {
        width: '15%',
        marginLeft: 20,
        justifyContent: 'center',
        color: COLORS.gray2
    }
})