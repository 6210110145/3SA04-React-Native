import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, Text} from 'react-native'
import Forecast from './Forcast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        decription: '-',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('./bg.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipcode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
        
    )
}

const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
});
   