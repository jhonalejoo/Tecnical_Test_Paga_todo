import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const BankItem = ({ item, index }) => {
    return (
        <View index={index} style={styles.container}>
            <FastImage source={{ uri: item.url }} style={styles.image} />
            <View style={styles.containerText}>
                <Text style={styles.textTitle}>{item.bankName}</Text>
                <Text style={styles.textDescription}>{item.description}</Text>
                <Text>{`Años: ${item.age}`}</Text>
            </View>
        </View>
    )
}

export default BankItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'white',
        borderColor: '#F6F6F6',
        borderRadius: 5,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
    containerText: {
        justifyContent: 'space-between',
        marginLeft: 20
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    textDescription: {
        width: '60%'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10
    }
})