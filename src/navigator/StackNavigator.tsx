import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { UserScreen } from '../screens/UserScreen';

const Stack = createStackNavigator();

export const Stacknavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen}></Stack.Screen>
            <Stack.Screen name='User' options={{headerShown: false}} component={UserScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}