import React, { useRef, useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Animated,
    Dimensions
} from 'react-native'
import HeaderNavigation from '../components/HeaderNavigation'

const { width } = Dimensions.get('window')

const AddPlayers = () => {
    const [gender, setGender] = useState(null)
    const slideAnim = useRef(new Animated.Value(0)).current

    const handleSelect = (type) => {
        const toValue = type === 'female' ? (width * 0.8) / 2 : 0
        setGender(type)

        Animated.timing(slideAnim, {
            toValue,
            duration: 200,
            useNativeDriver: true,
        }).start()
    }

    useEffect(() => {
        handleSelect('female')
    }, [])

    return (
        <View style={styles.container}>
            <HeaderNavigation title={"Añadir un Jugador"} />

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <TextInput
                    placeholder='Nombre del Jugador'
                    placeholderTextColor={'#1E1E1E'}
                    style={styles.input}
                />
            </View>

            <View style={styles.switcherWrapper}>
                <Animated.View
                    style={[
                        styles.slider,
                        {
                            transform: [{ translateX: slideAnim }],
                        },
                        gender === 'male' && styles.activeMale,
                        gender === 'female' && styles.activeFemale,
                    ]}
                />
                <TouchableOpacity
                    style={styles.switchButton}
                    onPress={() => handleSelect('male')}
                >
                    <Text style={gender === 'male' ? styles.textActiveMale : styles.textInactive}>
                        Hombre
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.switchButton}
                    onPress={() => handleSelect('female')}
                >
                    <Text style={gender === 'female' ? styles.textActiveFemale : styles.textInactive}>
                        Mujer
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddPlayer')}>
                    <Text style={styles.addButtonText}>Confirmar</Text>
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
    input: {
        backgroundColor: '#FFF0F5',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '80%',
    },
    switcherWrapper: {
        flexDirection: 'row',
        width: '80%',
        height: 60,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 30,
        alignSelf: 'center',
        overflow: 'hidden',
        position: 'relative',
    },
    switchButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    slider: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '50%',
        borderRadius: 10,
        zIndex: 1,
    },
    activeMale: {
        backgroundColor: '#1E1E1E',
    },
    activeFemale: {
        backgroundColor: '#FFA4CD',
    },
    textInactive: {
        color: '#1E1E1E',
        fontWeight: 'bold',
    },
    textActiveMale: {
        color: '#FFC86B',
        fontWeight: 'bold',
    },
    textActiveFemale: {
        color: '#FFF0F5',
        fontWeight: 'bold',
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 40,
    },
    addButton: {
        backgroundColor: '#FFC86B',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 15,
        width: 250,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#1E1E1E',
        fontWeight: 'bold',
        fontSize: 14,
        
    },
})

export default AddPlayers
