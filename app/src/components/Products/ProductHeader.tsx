import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {Hamburger, AmazonLogo, Key, Back} from '../../Icons';
import {Box} from '../theme';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/actions/authActions';
const {width: sWidth} = Dimensions.get('window');

interface ProductHeaderProps {
  back: boolean;
}
export default function ProductHeader({back}: ProductHeaderProps) {
  const dispatch = useDispatch();
  const width = sWidth * 0.9;
  const {navigate} = useNavigation();

  const gotoCart = () => {
    navigate('ProductCart');
  };

  const onLogOut = () => {
    dispatch(logout());
    navigate('Auth');
  };

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      {...{width}}
      alignItems="center">
      {back ? <Back size={25} /> : <Hamburger size={20} onPress={onLogOut} />}
      <AmazonLogo size={70} />
      <Key size={20} onPress={gotoCart} />
    </Box>
  );
}
