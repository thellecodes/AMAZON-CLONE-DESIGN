import React from 'react';
import {StyleSheet} from 'react-native';
import theme, {Box} from './theme';
import {Spinner} from 'native-base';

export default function Loader() {
  return (
    <Box
      flex={1}
      backgroundColor="primary"
      justifyContent="center"
      alignItems="center"
      style={{...StyleSheet.absoluteFillObject}}>
      <Spinner color={theme.colors.white} />
    </Box>
  );
}
