import React from  'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style ={styles.content1}>{props.main}</Text>
            <View>
                <Text style ={styles.content2}>{props.description}</Text>
                <Text style ={styles.content3}>{props.temp} °C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content1: {
        paddingTop: 20,
        fontSize: 30,
        color: 'white',
        paddingLeft: 60
    },
    content2: {
        paddingTop: 20,
        fontSize: 15,
        color: 'white',
        paddingLeft: 60,
    },
    content3: {
        paddingTop: 20,
        fontSize: 30,
        color: 'white',
        paddingLeft: 50,
    },
})