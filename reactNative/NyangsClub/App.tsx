/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainBar} from './src/component/Bar/MainBar';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {post, Posting} from './src/component/Main/Post/Posting';
import {QnA} from './src/component/Main/QnA';
import {Sale} from './src/component/Main/Sale';
import {My} from './src/component/Main/My';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
    const postings: post[] = [
        {
            id: 1,
            author: 'author',
            date: '2021-08-01',
            images: [{num: 1, id: 1, uri: 'https://picsum.photos/900/1600'}, {
                num: 2,
                id: 2,
                uri: 'https://picsum.photos/1600/900'
            }],
            content: '내용 입니다.~~~',
            like: [{id: 1}, {id: 2}],
            comment: 0,
            profileUri: 'https://picsum.photos/200/300',
        },
        {
            id: 2,
            author: 'author',
            date: '2021-08-01',
            images: [{num: 1, id: 3, uri: 'https://picsum.photos/300/200'}],
            content: '내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~내용 입니다.~~~',
            like: [{id: 1} , {id: 2}],
            comment: 0,
            profileUri: 'https://picsum.photos/200/300',
        },
    ];
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#fb8c00',
            }}>
            <Tab.Screen
                name="냥이야기"
                children={({navigation}) => (
                    <MainBar navigation={navigation} main={<Posting posts={postings}/>}/>
                )}
                options={{
                    tabBarIcon: ({color}) => <MCIcon name={'post'} size={25} color={color}/>,
                    title: '냥이야기',
                }}
            />
            <Tab.Screen
                name="궁금하냥"
                children={({navigation}) => (
                    <MainBar navigation={navigation} main={QnA({})}/>
                )}
                options={{
                    tabBarIcon: ({color}) => <MCIcon name={'brain'} size={25} color={color}/>,
                }}
            />
            <Tab.Screen
                name="냥 장터"
                children={({navigation}) => (
                    <MainBar navigation={navigation} main={Sale({})}/>
                )}
                options={{
                    tabBarIcon: ({color}) => <IonIcon name={'basket'} size={25} color={color}/>
                }}
            />
            <Tab.Screen
                name="My냥"
                children={({navigation}) => (
                    <MainBar navigation={navigation} main={My({})}/>
                )}
                options={{
                    tabBarIcon: ({color}) => <MCIcon name={'cat'} size={25} color={color}/>,
                }}
            />
        </Tab.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="main">
                <Stack.Screen
                    name="main"
                    component={MainTab}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
