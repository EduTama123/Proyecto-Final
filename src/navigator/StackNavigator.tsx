import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { StartScreen } from '../screens/StartScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const Stacknavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Start'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='Start' component={StartScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
    );
}