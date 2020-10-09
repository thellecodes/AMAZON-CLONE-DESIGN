import * as React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Login from './Login';
import Register from './Register';

export type AuthRoutes = {
  Login: undefined;
  Register: undefined;
};

export const AuthStack = createSharedElementStackNavigator<AuthRoutes>();

export const AuthNavigator = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen
      name="Login"
      options={{headerShown: false}}
      component={Login}
    />
    <AuthStack.Screen
      name="Register"
      component={Register}
      options={{
        headerShown: false,
      }}
    />
  </AuthStack.Navigator>
);
