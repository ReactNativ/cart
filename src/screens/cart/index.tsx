import React, { useCallback, useLayoutEffect } from 'react';
import { Text, SafeAreaView, FlatList, View, Image, StyleSheet, Dimensions } from 'react-native';
import Card from '../../components/Card';
import { White } from '../../utils/Colors';
import Button from '../../components/Button';
import { Strings } from '../../utils/Strings';
import quantityOfItem from '../../utils/functions';
import { useAppSelector } from '../../redux/hooks';
import HeaderIcon from '../../components/HeaderIcon';
import { cartItem } from '../../redux/slice/cartSlice';
import { useNavigation } from '@react-navigation/native';
import { deleteCart } from '../../redux/actions/cartActions';

const height = Dimensions.get('window').height;

const Index = () => {

    const navigation = useNavigation();
    const { cart, totalAmount } = useAppSelector(state => state.cartReducer);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: Strings.cart,
            headerRight: () =>
                <HeaderIcon onPress={() => deleteCart()} hide={cart.length === 0} />
        })
    }, [cart]);

    /* Calculate the quantity of each item in the shopping cart */
    const getOrderQty = useCallback((itemId: string) => {
        return quantityOfItem(cart, itemId);
    }, [cart]);

    const renderItemHandler = (item: cartItem) => {
        return <Card {...item} qt={getOrderQty(item.id)!} />
    };

    const ListEmptyComponent = () => {
        return <>
            <View style={styles.emptyCart}>
                <Image
                    style={styles.emptyImage}
                    source={require('../../assets/images/empty-cart.png')}
                    resizeMode='contain'
                />
            </View>
        </>
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={ListEmptyComponent}
                contentContainerStyle={{ paddingBottom: 100 }}
                renderItem={(item) => renderItemHandler(item.item)}
            />

            {cart.length > 0 &&
                <View style={styles.bottomContainer} >

                    <View style={{ flex: 2 }} >
                        <Text>{Strings.total}</Text>
                        <Text style={styles.totalAmountTxt}>${totalAmount}</Text>
                    </View>

                    <View style={styles.checkOutContainer} >
                        <Button title={Strings.checkout} onPress={() => { }} />
                    </View>

                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    emptyCart: {
        height: height,
        alignItems: 'center',
        backgroundColor: White,
        justifyContent: 'center',
    },
    emptyImage: {
        width: '70%',
        height: '70%',
    },
    bottomContainer: {
        bottom: 3,
        padding: 25,
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: White,
    },
    totalAmountTxt: {
        fontSize: 16,
        paddingTop: 5,
        fontWeight: '700',
    },
    checkOutContainer: {
        flex: 2,
        alignItems: 'flex-end',
    }
})

export default Index;