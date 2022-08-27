import Card from '../../components/Card';
import React, { useCallback } from 'react';
import foodList from '../../data/foods.json';
import quantityOfItem from '../../utils/functions';
import { useAppSelector } from '../../redux/hooks';
import { SafeAreaView, FlatList } from 'react-native';
import { cartItem } from "../../redux/slice/cartSlice";

const Index = () => {

    const { cart } = useAppSelector(state => state.cartReducer);

    /* Calculate the quantity for each food selected by the customer  */
    const getOrderQty = useCallback((itemId: string) => {
        return quantityOfItem(cart, itemId);
    }, [cart]);

    const renderItemHandler = (item: cartItem) => {
        return <Card {...item} qt={getOrderQty(item.id)!} />
    };

    return (
        <SafeAreaView>

            <FlatList
                data={foodList}
                keyExtractor={(item) => item.id}
                renderItem={(item) => renderItemHandler(item.item)}
            />

        </SafeAreaView>
    )
}

export default Index;