import React, {PropsWithChildren} from 'react';
import {TopBar} from './TopBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Posting} from "../Main/Post/Posting";

interface MainProps {
  navigation: any;
  main: any;
}

export const MainBar= ({navigation, main}:MainProps) => {
  return (
    <>
      <SafeAreaView>
        <TopBar navigation={navigation}/>
          {main}
      </SafeAreaView>
    </>
  );
};
