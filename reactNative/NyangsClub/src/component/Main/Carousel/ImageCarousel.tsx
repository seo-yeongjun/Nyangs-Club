import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PostImage from './PostImage';
import {images} from '../Post/Posting';

interface ICarousel {
    gap: number;
    offset: number;
    images: images[];
    pageWidth: number;
    pageHeight: number;
}

const styled = (focused: boolean = false) => StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fdfbfa',
    },
    indicator: {
        margin: 0,
        backgroundColor: focused ? '#262626' : '#dfdfdf',
        width: 6,
        height: 6,
        borderRadius: 3,
    },
    indicatorWrapper: {

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
});

export default function ImageCarousel(images: ICarousel) {
    const [page, setPage] = useState(0);

    function renderItem({item}: any) {
        return (
            <PostImage item={item} set={{width: images.pageWidth, marginHorizontal: images.gap, height: images.pageHeight}}/>
        );
    }

    const onScroll = (e: any) => {
        const newPage = Math.round(
            e.nativeEvent.contentOffset.x / (images.pageWidth + images.gap),
        );
        setPage(newPage);
    };


    return (
        <View style={styled(false).container}>
            <FlatList
                automaticallyAdjustContentInsets={false}
                contentContainerStyle={{
                    paddingHorizontal: images.offset + images.gap,
                }}
                data={images.images}
                decelerationRate="fast"
                horizontal
                keyExtractor={(item: any) => `page__${item.id}`}
                onScroll={onScroll}
                pagingEnabled
                renderItem={renderItem}
                snapToInterval={images.pageWidth + images.gap}
                snapToAlignment="start"
                showsHorizontalScrollIndicator={false}
            />
            <View style={styled(false).indicatorWrapper}>
                {Array.from({length: images.images.length}, (_, i) => i).map((i) => (
                    <View style={styled(i === page).indicator} key={`indicator_${i}`}/>
                ))}
            </View>
        </View>
    );
}
