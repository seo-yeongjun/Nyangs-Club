import React, {PropsWithChildren} from 'react';
import {TopBar} from './TopBar';
import {SafeAreaView} from 'react-native-safe-area-context';

interface MainProps {
  navigation: any;
  main: React.FunctionComponent<any>;
}

export const MainBar: React.FC<PropsWithChildren<MainProps>> = ({
  navigation,
  main,
}) => {
  return (
    <>
      <SafeAreaView>
        <TopBar navigation={navigation} />
        {main({})}
      </SafeAreaView>
    </>
  );
};
