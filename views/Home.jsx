import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Categories from '../components/Categories'

const Home = () => {
    return (
        <View style={styles.container}>
            <Categories />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF2E88',
    },
})







export default Home