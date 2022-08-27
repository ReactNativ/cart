import React from 'react';
import ReduceButton from '../components/ReduceButton';
import { Black, Gray90, White } from '../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IncreaseButton from '../components/IncreaseButton';
import { Text, Pressable, Image, View, StyleSheet } from 'react-native';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

interface Props {
    id: string,
    qt: number,
    name: string,
    image: string,
    price: number,
}

const Card: React.FC<Props> = (props) => {

    return (
        <View style={styles.smallCard} >

            <View style={{ padding: 5 }}>
                <Image source={{ uri: props.image }}
                    style={styles.foodImage}
                    resizeMode='stretch'
                />
            </View>

            <View style={{ flex: 1, padding: 8 }}>

                <View style={[styles.productInfo, {}]}>

                    <View style={{ flex: 5 }} >
                        <Text style={styles.foodTitle}>{props.name}</Text>
                    </View>

                </View>

                <View style={[styles.productInfo]}>

                    <View style={{ flex: 1 }} >
                        <Text style={{ textAlign: 'left', fontWeight: 'bold' }}> $ {props.price}</Text>
                    </View>

                    {props.qt ?
                        <View style={styles.countView}>

                            <ReduceButton onPress={() => removeFromCart({ ...props })} />

                            <Text style={{ alignSelf: "center", paddingHorizontal: 8 }} >{props.qt}</Text>

                            <IncreaseButton onPress={() => addToCart({ ...props })} />

                        </View> :

                        <Pressable
                            onPress={() => addToCart({ ...props })}
                            style={styles.addIconContainer}
                        >
                            <Ionicons name='add' size={35} />
                        </Pressable>
                    }

                </View>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    countView: {
        flex: 0.9,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    foodTitle: {
        color: Black,
        fontWeight: "700",
    },
    smallCard: {
        flex: 1,
        height: 112,
        elevation: 2,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: "row",
        borderColor: Gray90,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        backgroundColor: White,
    },
    foodImage: {
        width: 100,
        height: 90,
        borderRadius: 10,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: Gray90,
        justifyContent: "flex-start",
    },
    productInfo: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    addIconContainer: {
        paddingHorizontal: 10,
        alignItems: 'flex-end',
    }
});

export default Card;