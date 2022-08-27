import React from 'react';
import { Red } from '../utils/Colors';
import { Pressable, Text, StyleSheet } from 'react-native';

interface Props {
    onPress: () => void
}

const ReduceButton: React.FC<Props> = ({ onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress} >
            <Text style={{ color: 'black' }}> - </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 35,
        borderWidth: 1,
        borderColor: Red,
        alignItems: 'center',
        borderTopLeftRadius: 25,
        justifyContent: 'center',
        borderBottomLeftRadius: 25,
    }
});

export default ReduceButton;