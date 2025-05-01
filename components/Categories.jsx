import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HotCategorie = require('../assets/img/img_1.png')
const CasualCategorie = require('../assets/img/img_2.png')

const Categories = () => {
    const navigation = useNavigation()
    
    return (
        <View style={styles.container}>
            {/* Primera card - Imagen a la derecha */}
            <TouchableOpacity style={[styles.card, styles.cardRight]} onPress={() => navigation.navigate('PlayersList')}>
                <View style={styles.textContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>ADULTOS HOT</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Lorem ipsum alijand</Text>
                    </View>
                </View>
                <Image source={CasualCategorie} style={styles.image} resizeMode="cover" />
            </TouchableOpacity>

            {/* Segunda card - Imagen a la izquierda */}
            <TouchableOpacity style={[styles.card, styles.cardLeft]} onPress={() => navigation.navigate('PlayersList')}>
                <Image source={HotCategorie} style={styles.image} resizeMode="cover" />
                <View style={styles.textContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>ADULTOS HOT</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Lorem ipsum alijand</Text>
                    </View>
                </View>
            </TouchableOpacity>            
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