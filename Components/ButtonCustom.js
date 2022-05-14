import React from 'react';
import { StyleSheet, Text,TouchableOpacity,Dimensions,Alert } from 'react-native';

const ButtonCustom = ({text,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
export default ButtonCustom
const styles = StyleSheet.create({
    button:
    {
        backgroundColor: "#21283F",
        width: Dimensions.get("window").width - 64,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20,
    },
    text: 
    {
        color: '#FEFEFE',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 22,
    }
})