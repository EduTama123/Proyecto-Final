import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/core';
import { BodyComponent } from '../components/BodyUserComponent';

//imagen de fondo
const image = { uri: 'https://i.pinimg.com/736x/1c/77/2e/1c772e05669e4c65d6459e61ea53f893.jpg' };


export const UserScreen = () => {
    //Navegacion por hooks de Reack Native  
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
                    {/*componente imagen de fondo */}
                    <ImageBackground source={image} resizeMode="cover" style={styles.imagenFondo}>
                        <View style={styles.overlay} />
                        {/*contenedor principal */}
                        <View style={styles.containerLogin}>
                            <BodyComponent>
                                <Text style={styles.title}>Crear Cuenta</Text>
                                {/* aqui va el input */}
                            </BodyComponent>
        
                        </View>
                    </ImageBackground>
                </View>
    )
}