import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const WheelScreen = () => {
    return (
        <View style={styles.container}>
            {/* Punta triangular superior izquierda  */}
            <View style={styles.topLeftTriangle} />
            
            {/* Punta triangular inferior derecha  */}
            <View style={styles.bottomRightTriangle} />
            
        </View>
    )
}

const { width, height } = Dimensions.get('window')
const triangleSize = Math.max(width, height) * 0.32 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C70062',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topLeftTriangle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: triangleSize,
        borderTopWidth: triangleSize,
        borderRightColor: 'transparent',
        borderTopColor: '#FF80B5',
    },
    bottomRightTriangle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: triangleSize,
        borderBottomWidth: triangleSize,
        borderLeftColor: 'transparent',
        borderBottomColor: '#FF2E88',
    },
})

export default WheelScreen