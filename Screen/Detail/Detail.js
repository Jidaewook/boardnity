import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';


const Detail = ({route}) => {

    const {id} = route.params;

    const [Detail, setDetail] = useState({});

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

    useEffect(() => {
        getDetail()
    }, {})

    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>
                {Detail.title}
            </Text>
        </View>
        
    );
};

export default Detail;