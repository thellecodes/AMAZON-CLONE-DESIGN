import React from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import theme, {Text} from '../components/theme';

interface ButtonProps {
  variant?: 'default' | 'primary';
  label?: string;
  onPress?: () => void;
  textTransform?: any;
  style?: any;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});

const Button = ({
  variant,
  label,
  onPress,
  textTransform,
  style,
}: ButtonProps) => {
  const backgroundColor =
    variant === 'primary' ? theme.colors['primary'] : theme.colors.grey;
  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.orange;

  return (
    <RectButton
      {...{onPress}}
      style={{...styles.container, backgroundColor, ...style}}>
      <Text
        style={{
          color,
          fontFamily: 'Rubik-Bold',
        }}
        textTransform={textTransform ? textTransform : 'capitalize'}
        variant="button">
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {variant: 'default'};

export default Button;
