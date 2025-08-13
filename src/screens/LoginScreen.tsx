import React, { useState } from 'react';
import { Alert, Image, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TitleComponent } from '../components/TitleComponents';
import { TextComponent } from '../components/TextComponent';
import { TERTIARY_COLOR } from '../commons/constants';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { InputComponent } from '../components/InputComponent';
import { ButtonNavigationComponent } from '../components/ButtonNavigationComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { User } from '../navigator/StackNavigator';

//interface para las propiedades
interface Props{
  users: User[]; //arreglos con la lista de usuarios
}

//interface para el objeto del formulario
interface FormLogin {
    username: string;
    password: string;
}

//arreglo con la lista de usuarios
const users: User[] = [
    { id: 1, name: 'Eduardo Tamayo', username: 'Tamayo', password: '123' },
    { id: 2, name: 'Erick Rodriguez', username: 'Erick', password: '12345' }
];

export const LoginScreen = ({users}: Props) => {
    //hook useState para manejar el estado del formulario
    const [formLogin, setformLogin] = useState<FormLogin>({
        username: '',
        password: ''
    });

    //hook useState para manejar el estado de la visibilidad de la contraseña
    const [hiddenPassword, sethiddenPassword] = useState<boolean>(true);

    //hook useNavigation para navegar entre pantallas
    const navigation = useNavigation();

    //funcion para modificar el estado del formulario
    const chanceFormLogin = (property: string, value: string): void => {
        setformLogin({ ...formLogin, [property]: value })
    }

    //funcion para validar el usuario y la contraseña
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.username == formLogin.username && user.password == formLogin.password)
        return existUser;
    }


    //funcion para iniciar sesion
    const handleLogin = (): void => {
        if (formLogin.username == '' || formLogin.password == '') {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return; //si falta algun campo, nos saca del flujo
        }

        //Verificar si el usuario existe
        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
            return; //El return impide que se ejecuten las demas lineas de codigo
        }
        //console.log(formLogin);
        navigation.dispatch(CommonActions.navigate({name: 'Home'}));
        Alert.alert('Acceso exitoso! ', 'Bienvenido de nuevo '+formLogin.username);
    }
    return (
        <View style={styles.containerBackground}>
            <TitleComponent title='SWEET TIME' fontSize={50} marginHorizontal={0} paddingVertical={35} backgroundColor={TERTIARY_COLOR} borderBottomLeftRadius={30} borderBottomRightRadius={30} />
            <View style={styles.containerImage}>
                <Image
                    source={{
                        uri: 'https://static.vecteezy.com/system/resources/previews/032/736/579/non_2x/auditor-icon-vector.jpg'
                    }}
                    style={styles.avatar} />
            </View>
            <TextComponent title='Iniciar Sesión' fontSize={28} />
            <TextComponent title='Credenciales para acceder (Usuario: Tamayo / Contraseña: 123)' fontSize={12} width={'100%'} textAlign='center' marginHorizontal={0} marginVertical={0}/>
            <View style={styles.containerForm}>
                <TextComponent title='Usuario' fontSize={20} textAlign='left' marginHorizontal={12} marginVertical={10}/>
                <InputComponent placeholder='Usuario' KeyboardType='email-address' changeForm={chanceFormLogin} property='username'/>
                <TextComponent title='Contraseña' fontSize={20} textAlign='left' marginHorizontal={12} marginVertical={10}/>
                <InputComponent placeholder='Contraseña' KeyboardType='default' changeForm={chanceFormLogin} property='password'
                    isPassword={hiddenPassword} />
                <Icon
                    name={hiddenPassword ? 'visibility' : 'visibility-off'}
                    size={30}
                    style={styles.iconForm}
                    onPress={() => sethiddenPassword(!hiddenPassword)} />
            </View>
            <ButtonComponent textButton='Iniciar' handleLogin={handleLogin} fontSize={20}/>
            <ButtonNavigationComponent textButton='No tienes una cuenta? ¡Regístrate ahora!' screen='Register' width={'60%'} fontSize={20} marginTop={110}/>
        </View>

    );
};
