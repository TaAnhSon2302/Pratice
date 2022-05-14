import React from 'react';
import { StyleSheet,View, Text,TouchableOpacity,Dimensions,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const CardSound = ({text,icon,backgroundColor}) =>{
    return (
        <View style={styles.card}>
           <View style={[styles.iconbox,{backgroundColor:backgroundColor}]}>
           {icon}
           </View>
           <View style={styles.textbox}>
               <Text style={styles.text}>{text}</Text>
           </View>
        </View>
    )
}
export default CardSound
const styles=StyleSheet.create({
   card: {
       width:100,
       height:123,
       marginBottom: 20,
   },
   iconbox: {
       height:93,
       backgroundColor:'#4870FF',
       borderTopLeftRadius: 16,
       borderTopRightRadius: 16,
       alignItems: 'center',
       justifyContent: 'center',
   },
   textbox:{
       height: 32,
       backgroundColor: '#2D344B',
       borderBottomLeftRadius: 16,
       borderBottomRightRadius: 16,
       alignItems: 'center',
       justifyContent: 'center',
   },
   text:{
       color: '#FFF',
   },
})