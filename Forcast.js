import React from  'react'
import { Text, View } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text>{props.main}</Text>
            <Text>{props.decription}</Text>
            <View>
                <Text>{props.temp}</Text>
                <Text>°C</Text>
            </View>
        </View>
    )
}