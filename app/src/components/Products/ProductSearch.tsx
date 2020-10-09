import React from 'react';
import TextInput from '../../Utils/TextInput';
import {Box} from '../theme';

export default function ProductSearch() {
  return (
    <Box
      flexDirection="row"
      marginTop="s"
      justifyContent="space-between"
      alignItems="center">
      <TextInput placeholder="What are you looking for ?" />
    </Box>
  );
}
