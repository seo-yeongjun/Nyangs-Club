import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
export const MCIcon = ({name, size}: any) => {
  return ({color}: any) => (
    <MaterialCommunityIcon name={name} color={color} size={size} />
  );
};

export const IonIcon = ({name, size}: any) => {
  return ({color}: any) => <IonIcons name={name} color={color} size={size} />;
};
