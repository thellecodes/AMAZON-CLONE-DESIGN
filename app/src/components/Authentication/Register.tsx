import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Dimensions} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {AuthRoutes} from '.';
import {register} from '../../store/actions/authActions';
import Button from '../../Utils/Button';
import FormTextInput from '../../Utils/FormTextInput';
import Loader from '../Loader';
import {Box, Text} from '../theme';
const {height, width} = Dimensions.get('window');

interface RegisterProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthRoutes, 'Login'>,
    StackNavigationProp<AuthRoutes, 'Register'>
  >;
}

function Register({navigation}: RegisterProps) {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);
  const error = useSelector((state: any) => state.err);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = () => {
    navigation.navigate('Login');
  };

  const onRegister = () => {
    dispatch(register({name, email, password}));
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      onLogin();
    }
  }, [auth]);

  return (
    <Box
      flex={1}
      backgroundColor="primary"
      padding="xl"
      justifyContent="center"
      alignItems="center">
      <Box
        height={height * 0.65}
        width={width * 0.9}
        borderRadius="l"
        backgroundColor="white"
        padding="l"
        alignItems="center">
        <Text variant="title" color="primary" marginBottom="l">
          SIGN UP
        </Text>

        {error.id === 'REGISTER_FAIL' ? (
          <>
            {error.msg.msg ? (
              <Text
                variant="smtitle"
                color="danger"
                textTransform="uppercase"
                fontSize={12}
                marginBottom="m">
                {error.msg.msg}
              </Text>
            ) : null}
          </>
        ) : null}

        <FormTextInput
          placeholder="Fullname"
          onChangeText={(name) => setName(name)}
        />

        <FormTextInput
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />

        <FormTextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
        />

        <Button label="Register" variant="primary" onPress={onRegister} />

        <BorderlessButton style={{marginTop: 30}} onPress={onLogin}>
          <Text variant="smtitle" color="primary">
            Login
          </Text>
        </BorderlessButton>
      </Box>
      {auth.regLoading ? <Loader /> : null}
    </Box>
  );
}

export default Register;
