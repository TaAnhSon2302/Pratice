import React from 'react';
import { StyleSheet, Text,TouchableOpacity,Dimensions,Alert,View } from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';


 const Tag = ({icon,long,text}) => {
     return (
         <TouchableOpacity style={[styles.tag,{width:long}]}>
             {icon}
             <Text style={styles.text}>{text}</Text>
         </TouchableOpacity>
     )
 }
 export default Tag
 const styles = StyleSheet.create({
         text:
         {
             color: "#FFF",
             fontSize:17,
             fontWeight: '600',
             lineHeight: 22,
             marginLeft: 4,
         },
         icon:{
           color: "#FFF"
         },
         tag: 
         {
           backgroundColor: "#4870FF",
           width:66,
           height: 38,
           flexDirection: "row",
           alignItems: 'center',
           justifyContent: 'center',
           borderRadius: 19,
           paddingRight:16,
           paddingVertical:8,
           paddingLeft: 8,
        },
 })