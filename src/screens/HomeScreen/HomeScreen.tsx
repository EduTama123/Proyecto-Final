import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { BodyComponent } from '../../components/BodyComponent'
import { FlatList } from 'react-native'
import { CardProduct } from './components/CardProduct'
import { TitleComponent } from '../../components/TitleComponents'
import { TERTIARY_COLOR } from '../../commons/constants'
import { styles } from '../../theme/appTheme';
import { TextComponent } from '../../components/TextComponent'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ModalCart } from './components/ModalCart'

//interface para el arreglo de objetos de productos
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}

//interface para el arreglo carrito
export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;

}

export const HomeScreen = () => {
  //arreglo con la lista de productos
  const products: Product[] = [
    { id: 1, name: 'Rebanada de pastel de chocolate', price: 4.50, stock: 4, pathImage: 'https://static.vecteezy.com/system/resources/previews/013/478/596/large_2x/slice-of-chocolate-cake-topping-with-chocolate-ball-on-plate-or-dish-delicious-sweet-dessert-concept-isometric-food-icon-cute-cartoon-illustration-element-symbol-of-sweets-cafe-menu-vector.jpg' },
    { id: 2, name: 'Rebanada de pastel de fresa', price: 3.75, stock: 6, pathImage: 'https://static.vecteezy.com/system/resources/previews/013/478/597/non_2x/slice-of-strawberry-cake-on-topping-with-a-strawberry-on-dish-or-plate-delicious-sweet-dessert-concept-isometric-food-icon-cute-cartoon-illustration-symbol-of-sweets-element-cafe-menu-vector.jpg' },
    { id: 3, name: 'Rebanada de pastel de arándano', price: 4.00, stock: 5, pathImage: 'https://static.vecteezy.com/system/resources/previews/013/478/595/non_2x/slice-of-blueberry-cake-topping-with-blueberries-on-plate-or-dish-delicious-sweet-dessert-concept-isometric-food-icon-cute-cartoon-illustration-graphic-element-symbol-of-sweets-cafe-vector.jpg' },
    { id: 4, name: 'Rebanada de pastel de limón', price: 3.50, stock: 7, pathImage: 'https://static.vecteezy.com/system/resources/previews/013/402/122/non_2x/slice-of-yellow-lemon-cake-topping-with-sliced-lemon-on-dish-or-plate-delicious-sweet-dessert-concept-isometric-food-icon-cute-cartoon-illustration-symbol-of-sweets-element-cafe-menu-vector.jpg' },
    { id: 5, name: 'Rebanada de pastel de té verde', price: 4.25, stock: 4, pathImage: 'https://static.vecteezy.com/system/resources/previews/013/402/114/non_2x/slice-of-matcha-cake-or-green-tea-cake-with-chocolate-on-plate-or-dish-delicious-sweet-dessert-concept-isometric-food-icon-cute-cartoon-illustration-symbol-of-sweets-element-cafe-menu-vector.jpg' },
    { id: 6, name: 'Pastel de chocolate en forma de cubo', price: 5.50, stock: 10, pathImage: 'https://static.vecteezy.com/system/resources/previews/013/478/592/non_2x/piece-of-chocolate-cube-cake-topping-with-chocolate-ball-on-plate-or-dish-delicious-sweet-dessert-concept-isometric-food-icon-cute-cartoon-illustration-element-symbol-of-sweets-cafe-menu-vector.jpg' },
    { id: 7, name: 'Pastel de fresa en forma de cubo', price: 4.75, stock: 9, pathImage: 'https://static.vecteezy.com/system/resources/previews/013/708/086/non_2x/slice-of-strawberry-cake-in-cube-shape-on-dish-or-plate-delicious-sweet-dessert-concept-isometric-food-icon-cute-cartoon-illustration-graphic-design-element-symbol-of-sweets-cafe-menu-vector.jpg' },
    { id: 8, name: 'Pastel de arándano en forma de cubo', price: 5.00, stock: 7, pathImage: 'https://static.vecteezy.com/system/resources/previews/013/478/594/non_2x/piece-of-blueberry-cube-cake-topping-with-blueberries-on-plate-or-dish-delicious-sweet-dessert-concept-isometric-food-icon-cute-cartoon-illustration-element-symbol-of-sweets-cafe-menu-vector.jpg' },
    { id: 9, name: 'Pastel de limón en forma de cubo', price: 4.50, stock: 8, pathImage: 'https://static.vecteezy.com/system/resources/previews/013/708/088/non_2x/slice-of-orange-cake-in-cube-shape-on-dish-or-plate-delicious-sweet-dessert-concept-isometric-food-icon-cute-cartoon-illustration-graphic-design-element-symbol-of-sweets-cafe-menu-vector.jpg' },
    { id: 10, name: 'Pastel de té verde en forma de cubo', price: 5.25, stock: 6, pathImage: 'https://static.vecteezy.com/system/resources/previews/013/708/085/non_2x/slice-of-matcha-cake-or-green-tea-cake-in-cube-shape-on-dish-or-plate-delicious-sweet-dessert-concept-isometric-food-icon-cute-cartoon-illustration-element-symbol-of-sweets-cafe-menu-vector.jpg' }
  ];

  //hook useState para manejar el estado de los productos
  const [listProducts, setListProducts] = useState<Product[]>(products); //arreglo de productos

  //hook useState para controlar los productos del carrito
  const [cart, setCart] = useState<Cart[]>([]); //arreglo con los productos seleccionados

  //hook useState para manejar el estado del modal
  const [showModal, setShowModal] = useState<boolean>(false);

  //funcion para actualizar el stock
  const updateStock = (id: number, quantity: number) => {
    const updateProducts = listProducts.map(product => product.id == id
      ? { ...product, stock: product.stock - quantity }
      : product);
    //actualizar producto en el arreglo
    setListProducts(updateProducts);
    //llamar la funcion para añadir al carrito
    addProduct(id, quantity);
  };

  //funcion para agregar los productos al carrito
  const addProduct = (id: number, quantity: number): void => {
    const product = listProducts.find(product => product.id == id);

    //Validar si existe el producto
    if (!product) {
      return;
    }

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(item => item.id == id);

    if (existingProductIndex >= 0) {
      // Funcion para actualizar la cantidad y total si el producto ya existe
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + quantity,
        total: updatedCart[existingProductIndex].total + (product.price * quantity)
      };
      setCart(updatedCart);
    } else {
      // Añadir nuevo producto si no existe
      const newProductCart: Cart = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        total: product.price * quantity
      };
      setCart([...cart, newProductCart]);
    }
    console.log(cart);
  };
  // Función para limpiar el carrito después de comprar
  const clearCart = (): void => {
    setCart([]); //Elimina todos los productos del carrito
    setShowModal(false);
    Alert.alert('Compra exitosa! ', 'Muchas gracias por comprar nuestros productos :D');
  };

  return (
    <View style={styles.containerBackground}>
      <TitleComponent title='PRODUCTOS' fontSize={40} marginHorizontal={0} paddingVertical={50} backgroundColor={TERTIARY_COLOR} borderBottomLeftRadius={30} borderBottomRightRadius={30} />
      <View style={localStyles.headerHome}>
        <View style={localStyles.continerIcon}>
          <Text style={localStyles.textIconCart}>{cart.length}</Text>
          <Icon name='shopping-cart' size={30} color={'white'} onPress={() => setShowModal(!showModal)} />
        </View>
      </View>
      <BodyComponent>
        <TextComponent title='Escoge tu postre favorito!' marginVertical={20} marginHorizontal={0} fontSize={25} />
        <FlatList
          data={listProducts}
          renderItem={({ item }) => <CardProduct item={item} updateStock={updateStock} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </BodyComponent>
      <ModalCart visible={showModal} setShowModal={() => setShowModal(!showModal)} cart={cart} clearCart={clearCart} />
    </View>

  )
}

const localStyles = StyleSheet.create({
  headerHome: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  continerIcon: {
    position: 'absolute',
    right: 0,
    bottom: 57,
    alignItems: 'flex-end',
    paddingHorizontal: 25,
  },
  textIconCart: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    borderRadius: 25,
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 6
  }
})