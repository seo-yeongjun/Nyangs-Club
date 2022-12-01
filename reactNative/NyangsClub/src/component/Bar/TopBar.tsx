import React, {PropsWithChildren} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import AnyIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

interface TopBarProps {
  navigation: any;
}

//make MainTopBar include logo, message, write, setting
export const TopBar: React.FC<PropsWithChildren<TopBarProps>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.right}>
        <TouchableOpacity
          style={styles.rightBtn}
          onPress={() => {
            navigation.navigate('write');
          }}>
          <AnyIcon name="message1" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightBtn}
          onPress={() => {
            navigation.navigate('setting');
          }}>
          <IonIcon name="settings-sharp" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  left: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 1,
  },
  logo: {
    marginRight: 15,
    width: 65,
    height: 40,
  },
  setting: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  rightBtn: {
    marginRight: 15,
  },
});
