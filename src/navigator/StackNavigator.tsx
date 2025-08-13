import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { StartScreen } from '../screens/StartScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

//interface para los objetos de mi arreglo users
export interface User {
    id: number;
    name: string;
    username: string;
    password: string;
}

//arreglo con la lista de usuarios
const users: User[] = [
    { id: 1, name: 'Eduardo Tamayo', username: 'Tamayo', password: '123' },
    { id: 2, name: 'Erick Rodriguez', username: 'Erick', password: '12345' }
];

const Stack = createStackNavigator();

export const Stacknavigator = () => {
    //hook useState para gestionar el estado del arreglo de usuarios
    const [listUsers, setlistUsers] = useState<User[]>(users);

    //fncion para agregar nuevos usuarios al arreglo (listUsers)
    const addUser = (user: User) => {
        //modificar el estado del arreglo
        setlistUsers([...listUsers, user]);
    }
    return (
        <Stack.Navigator
            //initialRouteName='Start'
            screenOptions={{ headerShown: false}}
        >
            <Stack.Screen name='Start' component={StartScreen} />
            <Stack.Screen name='Login' children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen name='Register' children={() => <RegisterScreen users={listUsers} addUser={addUser}/>} />
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    );
}