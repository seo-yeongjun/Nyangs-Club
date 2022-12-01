import React, {PropsWithChildren} from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface DetailProps {
  route: {
    params: {
      id: string;
    };
  };
  name: string;
  navigation: any;
}

export const DetailScreen: React.FC<PropsWithChildren<DetailProps>> = ({
  route,
  navigation,
}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Detail Screen</Text>
        <Text>{route.params.id}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => {
            navigation.navigate('Detail', {id: route.params.id + 1});
          }}
        />
      </View>
    </SafeAreaView>
  );
};
