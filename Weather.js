import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, View, Text} from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'decription',
        temp: 0,
        pressure: 0,
        humidity: 0,
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=3a36f9ab2cb02b2bba0c950089775d05`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        pressure: json.main.pressure,
                        humidity: json.main.humidity,
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./bg.jpg')} style={styles.backdrop}>
                <View style={styles.temp}>
                    <Text style={styles.zipCode}>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
                
            </ImageBackground>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: 5},
    backdrop: {
    width: '100%',
    height: '100%',
    },
    temp: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingRight: 50,
        opacity: 0.3,
        width: '100%',
        height: '45%',
    },
    zipCode: {
        paddingTop: 30,
        fontSize: 15,
        color: 'white',
        paddingLeft: 50
    }
});
   