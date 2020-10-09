import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Container} from 'native-base';

/* Utils */
import theme from './src/components/theme';
import {createStackNavigator} from '@react-navigation/stack';

/* Routes */
import {ProductNavigator} from './src/components/Products';
import {AuthNavigator} from './src/components/Authentication';

/* Import Redux */
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {loadUser} from './src/store/actions/authActions';

enableScreens();

type SharedStackParams = {
  Auth: undefined;
  Product: undefined;
};

const AppStack = createStackNavigator<SharedStackParams>();

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider {...{theme}}>
        <Container style={{flex: 1}}>
          <SafeAreaProvider>
            <AppStack.Navigator headerMode="none" initialRouteName="Auth">
              <AppStack.Screen name="Product" component={ProductNavigator} />
              <AppStack.Screen name="Auth" component={AuthNavigator} />
            </AppStack.Navigator>
          </SafeAreaProvider>
        </Container>
      </ThemeProvider>
    </NavigationContainer>
  );
}
