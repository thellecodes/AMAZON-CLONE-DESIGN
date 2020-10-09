import * as React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Container } from 'native-base';
/* Utils */
import theme from './src/components/theme';
import { createStackNavigator } from '@react-navigation/stack';
/* Routes */
import { ProductNavigator } from './src/components/Products';
import { AuthNavigator } from './src/components/Authentication';
/* Import Redux */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './src/store/actions/authActions';
enableScreens();
const AppStack = createStackNavigator();
export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
    }, []);
    return (React.createElement(NavigationContainer, null,
        React.createElement(ThemeProvider, Object.assign({}, { theme }),
            React.createElement(Container, { style: { flex: 1 } },
                React.createElement(SafeAreaProvider, null,
                    React.createElement(AppStack.Navigator, { headerMode: "none", initialRouteName: "Auth" },
                        React.createElement(AppStack.Screen, { name: "Product", component: ProductNavigator }),
                        React.createElement(AppStack.Screen, { name: "Auth", component: AuthNavigator })))))));
}