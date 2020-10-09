import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text} from '../theme';
import {Dot} from '../../images';
import ItemList from './ItemList';

const imgStyle = StyleSheet.create({
  img: {
    width: 5,
    height: 5,
    opacity: 0,
    marginTop: 7,
  },
});

const ListContainer = () => {
  return (
    <Box
      flex={1}
      padding="m"
      style={{marginTop: 20, borderTopLeftRadius: 50}}
      backgroundColor="cgrey"
      justifyContent="center">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        height={50}>
        <Box
          flexDirection="column"
          alignItems="center"
          margin="s"
          backgroundColor="cgrey">
          <Text fontSize={13} color="primary" variant="smtitle">
            Wood
          </Text>
          <Image source={Dot} style={{...imgStyle.img, opacity: 1}} />
        </Box>

        <Box flexDirection="column" alignItems="center" margin="s">
          <Text variant="smtitle">Electronic</Text>
          <Image source={Dot} style={{...imgStyle.img}} />
        </Box>

        <Box flexDirection="column" alignItems="center" margin="s">
          <Text variant="smtitle">Glasses</Text>
          <Image source={Dot} style={{...imgStyle.img}} />
        </Box>
      </Box>

      <ItemList />
    </Box>
  );
};

export default ListContainer;
