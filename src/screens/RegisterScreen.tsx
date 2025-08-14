import React, { useState } from 'react';
import { Image, Text, View, Alert } from 'react-native';
import { styles } from '../theme/appTheme';
import { TitleComponent } from '../components/TitleComponents';
import { TextComponent } from '../components/TextComponent';
import { TERTIARY_COLOR } from '../commons/constants';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { ButtonNavigationComponent } from '../components/ButtonNavigationComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { User } from '../navigator/StackNavigator';

//interface para las propiedades
interface Props {
    users: User[]; //arreglos con la lista de usuarios
    addUser: (user: User) => void,
}

// Interface para el objeto del formulario de registro
interface FormRegister {
    name: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}

export const RegisterScreen = ({ users, addUser }: Props) => {
    // Hook useNavigation para navegar entre pantallas
    const navigation = useNavigation();

    // Hook useState para manejar el estado del formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    });

    // Hook useState para manejar visibilidad de contraseña
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    // Función para modificar el estado del formulario
    const changeFormRegister = (property: string, value: string): void => {
        setFormRegister({ ...formRegister, [property]: value });
    }

    //funcion para verificar si existe el usuario
    const verifyUsername = (): User | undefined => {
        const existUsername = users.find(user => user.username == formRegister.username);
        return existUsername;
    }

    //funcion para generar los ids de los nuevos usuarios
    const getIdUser = (): number => {
        const getId = users.length + 1; //length: devuelve el numero de elementos del arreglo
        return getId;
    }

    // Función para manejar el registro
    const handleSingUp = (): void => {
        // Validar campos vacíos
        if (formRegister.name == '' || formRegister.lastName == '' ||
            formRegister.email == '' || formRegister.username == '' ||
            formRegister.password == '') {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return; // Si falta algún campo, sale del flujo
        }

        //validar que no exista el usuario
        if (verifyUsername() != undefined) {
            Alert.alert('Error', 'El usuario ya existe');
            return;
        }

        //crear el nuevo usuario (objeto)
        const newUser: User = {
            id: getIdUser(),
            name: formRegister.name,
            username: formRegister.username,
            password: formRegister.password
        }

        //agregar el nuevo usuario al arreglo
        addUser(newUser);
        Alert.alert('Éxito', 'Usuario registrado correctamente');
        navigation.goBack();
        console.log(formRegister);
    }

    return (
        <View style={styles.containerBackground}>
            <TitleComponent title='SWEET TIME' fontSize={50} marginTop={0} marginHorizontal={0} paddingVertical={35} backgroundColor={TERTIARY_COLOR} borderBottomLeftRadius={30} borderBottomRightRadius={30} />
            <View style={styles.containerImage}>
                <Image
                    source={{
                        uri: 'https://i.pinimg.com/1200x/80/71/d8/8071d84fe433c525b9f479cc5e48d846.jpg'
                    }}
                    style={styles.avatar}
                />
            </View>
            <TextComponent title='Registrate' fontSize={28} />
            <View style={styles.containerForm}>
                <View style={styles.containerInput}>
                    <TextComponent title='Ingrese su nombre' fontSize={17} textAlign='left' marginHorizontal={8} marginVertical={5} width='48%' />
                    <InputComponent placeholder='Nombre' KeyboardType='default' changeForm={changeFormRegister} property='name' width='45%' />
                    <View style={styles.containerInputSuperpuesto}>
                        <TextComponent title='Ingrese su apellido' fontSize={17} textAlign='left' marginHorizontal={10} marginVertical={5} />
                        <InputComponent placeholder='Apellido' KeyboardType='default' changeForm={changeFormRegister} property='lastName' width='98%' />
                    </View>
                </View>
                <TextComponent title='Ingrese un correo electrónico' fontSize={18} textAlign='left' marginHorizontal={15} marginVertical={5} />
                <InputComponent placeholder='E-mail' KeyboardType='email-address' changeForm={changeFormRegister} property='email' />
                <TextComponent title='Ingrese un usuario' fontSize={18} textAlign='left' marginHorizontal={15} marginVertical={5} />
                <InputComponent placeholder='Usuario' KeyboardType='default' changeForm={changeFormRegister} property='username' />
                <TextComponent title='Ingrese una contraseña' fontSize={18} textAlign='left' marginHorizontal={15} marginVertical={5} />
                <InputComponent placeholder='Contraseña' KeyboardType='default' changeForm={changeFormRegister} property='password' isPassword={hiddenPassword} />
                <Icon
                    name={hiddenPassword ? 'visibility' : 'visibility-off'}
                    size={30}
                    style={styles.iconForm}
                    onPress={() => setHiddenPassword(!hiddenPassword)} />
            </View>
            <ButtonComponent textButton='Registrarme' handleLogin={handleSingUp} fontSize={18} />
            <ButtonNavigationComponent textButton='Ya tienes una cuenta? Inicia sesión ahora' onPress={() => navigation.goBack()} width={'80%'} marginTop={0}/>
        </View>
    );
};
