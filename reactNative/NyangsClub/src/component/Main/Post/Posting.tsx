import {
    Alert,
    Button,
    Dimensions,
    Image,
    Modal,
    Platform, Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Card, TextInput} from "react-native-paper";
import ImageCarousel from "../Carousel/ImageCarousel";
import EvilIcon from "react-native-vector-icons/EvilIcons";

export type images = {
    num: number,
    id: number,
    uri: string
}

export type likes = {
    id: number,
}

export interface post {
    id: number,
    author: string,
    date: string,
    images: images[],
    content: string,
    like: likes[],
    comment: number,
    profileUri: string,
}

const getComments = (postId: number) => {
    return [
        {
            id: 1,
            commentId: 1,
            comment: "댓글1",
            date: "2021-01-01",
            nickname: "하와와",
            profileUri: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            commentId: 2,
            comment: "댓글2용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입",
            date: "2021-01-01",
            nickname: "하와와",
            profileUri: "https://picsum.photos/200/300",
        },
        {
            id: 1,
            commentId: 3,
            comment: "댓글1",
            date: "2021-01-01",
            nickname: "하와와",
            profileUri: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            commentId: 4,
            comment: "댓글2용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입",
            date: "2021-01-01",
            nickname: "하와와",
            profileUri: "https://picsum.photos/200/300",
        },
        {
            id: 1,
            commentId: 5,
            comment: "댓글1",
            date: "2021-01-01",
            nickname: "하와와",
            profileUri: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            commentId: 6,
            comment: "댓글2용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입",
            date: "2021-01-01",
            nickname: "하와와",
            profileUri: "https://picsum.photos/200/300",
        },
        {
            id: 1,
            commentId: 7,
            comment: "댓글1",
            date: "2021-01-01",
            nickname: "하와와",
            profileUri: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            commentId: 8,
            comment: "댓글2용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입",
            date: "2021-01-01",
            nickname: "하와와",
            profileUri: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            commentId: 9,
            comment: "댓글2용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입",
            date: "2021-01-01",
            nickname: "하와와",
            profileUri: "https://picsum.photos/200/300",
        },
        {
            id: 1,
            commentId: 10,
            comment: "댓글1",
            date: "2021-01-01",
            nickname: "하와와",
            profileUri: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            commentId: 11,
            comment: "댓글2용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입",
            date: "2021-01-01",
            nickname: "하와와",
            profileUri: "https://picsum.photos/200/300",
        },
    ]
}


const addComment = (id: number) => {

}

//각 게시물
const postComponent = (post: post) => {
    const [subContents, setSubContents] = useState(false);
    const scrollViewRef = useRef(null);
    const [width, setWidth] = useState(Dimensions.get('window').width);
    const [height, setHeight] = useState(Dimensions.get('window').height);
    const [modalVisible, setModalVisible] = useState(false);
    const [comments, setComments] = useState([]);
    const [scrollCounter, setScrollCounter] = useState(0);
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
        setComments(getComments(post.id));
    }, [modalVisible, setModalVisible]);


    //구현 해야 할 함수들
    const like = (id: number) => {
        console.log("like");
    }
    const comment = (id: number) => {
        setModalVisible(true);
    }


    const updateLayout = () => {
        setWidth(Dimensions.get('window').width);
        setHeight(Dimensions.get('window').height);
    }
    Dimensions.addEventListener('change', updateLayout);
    const changeSubContents = () => {
        setSubContents(!subContents);
    }


    return (
        <Card key={post.id}>
            <Card.Title title="Card Title" subtitle={post.date}
                        left={() => <Image source={{uri: post.profileUri}} style={{
                            width: 40,
                            height: 40,
                            borderRadius: 25,
                            borderWidth: 0.5,
                            borderColor: 'black'
                        }}/>} titleStyle={{fontSize: 15}} subtitleStyle={{fontSize: 12}}
                        style={{backgroundColor: '#fffdfc'}}/>
            <ImageCarousel gap={0} pageWidth={width} offset={0}
                           images={post.images}
                           pageHeight={height}/>
            <Card.Actions style={{backgroundColor: '#fdfbfa',}}>
                <TouchableOpacity onPress={() => like(post.id)} style={{flexDirection: 'row'}}>
                    <EvilIcon name="heart" size={30} color={'red'}></EvilIcon>
                    <Text>{post.like.length}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    comment(post.id);
                }} style={{flexDirection: 'row'}}>
                    <EvilIcon name="comment" size={30} color={'black'}></EvilIcon><Text>{post.comment}</Text>
                </TouchableOpacity>
            </Card.Actions>
            <Card.Content
                style={{backgroundColor: '#fdfbfa', borderBottomWidth: 0.5, borderBottomColor: '#ffdddd',}}>
                {
                    post.content.length < 60 ?
                        <Text style={{fontSize: 15, marginBottom: 30}}>{post.content}</Text> :
                        subContents ?
                            <View style={{marginBottom: 30}}><Text
                                style={{fontSize: 15}}>{post.content}<Text onPress={changeSubContents}
                                                                           style={{
                                                                               color: '#f1a544',
                                                                               fontSize: 15
                                                                           }}> 줄이기</Text></Text></View>
                            :
                            <View style={{marginBottom: 30}}><Text
                                style={{fontSize: 15}}>{post.content.substring(0, 60)}<Text
                                style={{color: '#f1a544', fontSize: 15}}
                                onPress={changeSubContents}> ...더보기</Text></Text></View>
                }
            </Card.Content>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableOpacity onPress={() => {
                    setModalVisible(!modalVisible);
                }} style={{flex: 0.4}}>
                </TouchableOpacity>
                <View style={Styles.centeredView}>
                    <View style={Styles.modalView}>
                        <EvilIcon name="close-o" size={25} color={'black'} onPress={() => {
                            setModalVisible(!modalVisible);
                        }} style={{alignSelf: 'flex-end', marginRight: 10}}></EvilIcon>
                        <ScrollView onScroll={(e) => {
                            if (e.nativeEvent.contentOffset.y < 0) {
                                setModalVisible(!modalVisible);
                            }
                        }} scrollEventThrottle={0} ref={scrollViewRef}>
                            {

                                (comments.length !== 0) ?
                                    comments.map((c) => {
                                        return (
                                            <View key={c.commentId}
                                                  style={{flexDirection: 'row', marginTop: 10, width: '70%'}}>
                                                <Image source={{uri: c.profileUri}} style={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: 25,
                                                    borderWidth: 0.5,
                                                    borderColor: 'black'
                                                }}/>
                                                <View style={{flexDirection: 'column', marginLeft: 10}}>
                                                    <Text style={{fontSize: 12}}>{c.nickname}</Text>
                                                    <Text style={{fontSize: 12}}>{c.date}</Text>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'column',
                                                    minHeight: 30,
                                                    justifyContent: 'center'
                                                }}>
                                                    <Text style={{fontSize: 12, marginLeft: 10}}>{c.comment}</Text>
                                                </View>
                                            </View>
                                        )
                                    }) : <Text>댓글이 없습니다.</Text>
                            }</ScrollView>
                        <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                            <TextInput style={{
                                width: '70%',
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 10,
                                marginLeft: 10,
                                paddingLeft: 10
                            }} placeholder={'댓글을 입력해주세요.'} onChangeText={text => setCommentText(text)}
                                       value={commentText}/>
                            <TouchableOpacity style={{
                                width: '20%',
                                height: 40,
                                backgroundColor: '#f1a544',
                                borderRadius: 10,
                                marginLeft: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onPress={() => {
                                addComment(post.id);
                            }}>
                                <Text style={{color: 'white'}}>등록</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </Card>
    )
}

const postComponents = (posts: any) => {
    return posts.posts.map((post: post) => postComponent(post));
}
//스크롤 뷰
export const Posting: React.FunctionComponent<any> = (posts: post[]) => {
    return (
        <View>
            <ScrollView style={Styles.container}>
                {postComponents(posts)}
            </ScrollView>
        </View>
    )

};

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffefe',
        ...Platform.select({
            ios: {
                height: '96%'
            },
            android: {
                height: '94%',
            },
        }),
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        bottom: 0,
    },
    modalView: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
