import { useNavigation } from '@react-navigation/native'
import React from 'react' 
import { FlatList, View, Text, StatusBar, StyleSheet, TouchableHighlight, ImageBackground} from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', {zipCode: code})}>
            <View style={styles.zipItem}>
                <Text>{place}</Text>
                <Text>{code}</Text>
            </View>
    </TouchableHighlight>
    
)
   
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={item => item.code}
                    renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
                    <StatusBar style="auto" />
            </ImageBackground>
            
        </View>
    ); 
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
    zipPalce: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    backdrop: {
        width: '100%',
        height: '100%',
    },
})