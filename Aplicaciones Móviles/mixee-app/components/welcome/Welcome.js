import { View, Text } from 'react-native';
import React from 'react';
import { LinealGradient } from 'expo-linear-gradient';
import COLORS from '../../constants/theme';

const Welcome = () => {
    return (
        <LinealGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
            >
            <View style={{flex: 1}}></View>
        </LinealGradient>
    )
}