import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    onPress: () => void,
    hide?: boolean,
}

const HeaderIcon: React.FC<Props> = ({ onPress, hide }) => {
    return <>
        {!hide &&
            <Pressable style={{ paddingHorizontal: 10 }} onPress={onPress} >
                <Ionicons name='trash' size={28} color='gray' />
            </Pressable >
        }
    </>
}

export default HeaderIcon;