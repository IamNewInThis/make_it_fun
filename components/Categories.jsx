import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

const HotCategorie = require('../assets/img/img_1.png') // Asegúrate de que la ruta es correcta

const Categories = () => {
    return (
        <View style={styles.container}>
            {/* Primera card - Imagen a la derecha */}
            <View style={[styles.card, styles.cardRight]}>
                <View style={styles.textContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>ADULTOS HOT</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Lorem ipsum alijand</Text>
                    </View>
                </View>
                <Image source={HotCategorie} style={styles.image} resizeMode="cover" />
            </View>

            {/* Segunda card - Imagen a la izquierda */}
            <View style={[styles.card, styles.cardLeft]}>
                <Image source={HotCategorie} style={styles.image} resizeMode="cover" />
                <View style={styles.textContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>ADULTOS HOT</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Lorem ipsum alijand</Text>
                    </View>
                </View>
            </View>            
        </View>
    )
}

const { width } = Dimensions.get('window')
const cardHeight = 100

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        height: cardHeight,
        marginBottom: 15,
        height: 180,
    },
    cardRight: {
        justifyContent: 'space-between',
    },
    cardLeft: {
        justifyContent: 'space-between',
    },
    image: {
        width: 120,
        height: 180,
    },
    textContent: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start',
    },
    titleContainer: {
        backgroundColor: 'white',
        width:'100%',
        paddingHorizontal: 8,
        paddingVertical: 18,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 4,
        marginBottom: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'black',
    },
    descriptionContainer: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    description: {
        color: 'white',
        fontSize: 10,
    },
    rating: {
        position: 'absolute',
        top: 10,
        right: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
})

export default Categories