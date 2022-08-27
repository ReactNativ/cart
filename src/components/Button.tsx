import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Red, White } from '../utils/Colors';

interface Props {
    title: string,
    onPress: () => void
}

const Button: React.FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 35,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: Red,
        justifyContent: 'center',
    },
    title: {
        color: White,
        fontWeight: '600',
        justifyContent: 'center'
    }
});

export default Button;