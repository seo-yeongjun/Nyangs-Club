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
import {MCIcon, IonIcon} from './src/IconTool';
import {Post} from './src/component/Main/Post';
import {QnA} from './src/component/Main/QnA';
import {Sale} from './src/component/Main/Sale';
import {My} from './src/component/Main/My';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fb8c00',
      }}>
      <Tab.Screen
        name="냥 글"
        children={({navigation}) => (
          <MainBar navigation={navigation} main={Post} />
        )}
        options={{
          tabBarIcon: MCIcon({name: 'post', size: 25}),
          title: '냥이야기',
        }}
      />
      <Tab.Screen
        name="궁궁하냥"
        children={({navigation}) => (
          <MainBar navigation={navigation} main={QnA} />
        )}
        options={{
          tabBarIcon: MCIcon({name: 'brain', size: 25}),
        }}
      />
      <Tab.Screen
        name="냥 장터"
        children={({navigation}) => (
          <MainBar navigation={navigation} main={Sale} />
        )}
        options={{
          tabBarIcon: IonIcon({name: 'basket', size: 25}),
        }}
      />
      <Tab.Screen
        name="My냥"
        children={({navigation}) => (
          <MainBar navigation={navigation} main={My} />
        )}
        options={{
          tabBarIcon: MCIcon({name: 'cat', size: 25}),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="dd">
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
