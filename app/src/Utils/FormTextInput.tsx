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

const FormTextInput = forwardRef<RNTextInput, TextInputProps>(
  ({...props}, ref) => {
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
          borderRadius: 10,
          marginBottom: 20,
        }}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={theme.colors['grey']}
          {...props}
          {...{ref}}
          style={{
            flex: 1,
            fontFamily: 'Rubik-Medium',
            color: theme.colors['grey'],
            fontSize: 15,
            textTransform: 'capitalize',
          }}
        />
      </Box>
    );
  },
);
export default FormTextInput;
