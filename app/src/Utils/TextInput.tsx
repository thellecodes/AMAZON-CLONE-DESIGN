import React, {forwardRef} from 'react';

import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  Dimensions,
} from 'react-native';

import theme, {Box} from '../components/theme';

/* Icons */
import Search from '../Icons/Search';
import Microphone from '../Icons/Microphone';

const {width} = Dimensions.get('window');

interface TextInputProps extends RNTextInputProps {}

const TextInput = forwardRef<RNTextInput, TextInputProps>(({...props}, ref) => {
  return (
    <Box
      flexDirection="row"
      height={54}
      borderRadius="s"
      borderColor="grey"
      borderWidth={StyleSheet.hairlineWidth}
      alignItems="center"
      style={{
        width: width * 0.85,
        paddingHorizontal: 4,
        borderRadius: 16,
      }}>
      <Box padding="s">
        <Search size={20} />
      </Box>

      <RNTextInput
        underlineColorAndroid="transparent"
        placeholderTextColor={theme.colors['grey']}
        {...props}
        {...{ref}}
        style={{
          flex: 1,
          fontFamily: 'CircularStdMedium',
          color: theme.colors['grey'],
          fontSize: 13,
        }}
      />

      <Box padding="s" backgroundColor="orange" borderRadius="m">
        <Microphone size={20} />
      </Box>
    </Box>
  );
});
export default TextInput;
