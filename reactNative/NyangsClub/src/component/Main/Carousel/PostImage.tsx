import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View, ViewStyle} from 'react-native';


interface IPage {
    item: { num: number; uri: string; id: string; };
    set: {
        width: number, marginHorizontal: number, height: number
    }
}

const landStyled = (set: any) => StyleSheet.create({
    pageItem: {
        flex: 1,
        width: set.width ,
        height: set.height/2,
        backgroundColor: '#fbf5f3',
        resizeMode: 'contain'
    },
})

const portStyled = (set: any) => StyleSheet.create({
    pageItem: {
        flex: 1,
        width: set.width,
        height: 460,
        backgroundColor: '#fbf5f3',
        resizeMode: 'contain'
    },
})

export default function PostImage({item, set}: IPage) {

    if (set.width > set.height) {
    return (
        <Image
            source={{uri: item.uri}}
            style={landStyled(set).pageItem}/>
    );}
    else {
        return (
            <Image
                source={{uri: item.uri}}
                style={portStyled(set).pageItem}/>
        );
    }
}
