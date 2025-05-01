import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import HeaderNavigation from '../components/HeaderNavigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const PlayersList = () => {
    const navigation = useNavigation()
    const { width } = useWindowDimensions()
    return (
        <View style={styles.container}>
            <HeaderNavigation title={"Lista de Jugadores"} />

            <View style={styles.playersWrapper}>
                {/* Jugadora */}
                <View style={styles.playerCard}>
                    <Text style={styles.playerName}>Manuela</Text>
                    <MaterialCommunityIcons name="gender-female" size={25} color="#FFC86B" />
                </View>

                {/* Jugador */}
                <View style={styles.playerCard}>
                    <Text style={styles.playerName}>Manuel</Text>
                    <MaterialCommunityIcons name="gender-male" size={25} color="#FFC86B" />
                </View>

                <View style={styles.addPlayer}>
                    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddPlayer')}>
                        <Text style={styles.addButtonText}>Agregar un Jugador</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('Wheel')}>
                    <Text style={styles.playButtonText}>Jugar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF2E88',
    },
    playersWrapper: {
        marginTop: 30,
        gap: 10,
        alignItems: 'center',
    },
    playerCard: {
        backgroundColor: '#1E1E1E',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 250,
    },
    playerName: {
        color: '#FFC86B',
        fontWeight: 'bold',
        fontSize: 16,
    },
    addPlayer: {
        marginTop: 20,
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#FF80B5',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 15,
        width: 250,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#FFF0F5',
        fontWeight: 'bold',
        fontSize: 14,
        
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 40,
    },
    playButton: {
        backgroundColor: '#1E1E1E',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 15,
        width: 250,
        alignItems: 'center',
    },
    playButtonText: {
        color: '#FFC86B',
        fontWeight: 'bold',
        fontSize: 14,
        
    },
})

export default PlayersList
