import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { BodyComponent } from '../components/BodyLoginComponent';

export const LoginScreen = () => {
    //imagen de fondo
    const image = { uri: 'https://i.pinimg.com/736x/1c/77/2e/1c772e05669e4c65d6459e61ea53f893.jpg' };
    return (
        <View style={styles.container}>
            {/*componente imagen de fondo */}
            <ImageBackground source={image} resizeMode="cover" style={styles.imagenFondo}>
                <View style={styles.overlay} />
                {/*contenedor principal */}
                <View style={styles.containerLogin}>
                    <BodyComponent>
                        <Text style={styles.title}>Inicio de sesión</Text>
                        {/* aqui va el input */}
                    </BodyComponent>

                </View>
            </ImageBackground>
        </View>
    )
}