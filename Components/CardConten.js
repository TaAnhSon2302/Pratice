import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'


const CardConten = ({image,songnumber,title,backgroundColor}) => {
  return (
    <View>
      <View style={styles.top}>
         <Image  source={image} alt="/" style={styles.image}></Image>
           <View style={styles.icon}>
           <Entypo name="controller-play" size={20} color="#fff" />
           </View>   
      </View>
      <View style={{ backgroundColor:backgroundColor,width: 164,height: 50,}}>
          <Text style={{fontWeight:'400', fontSize:17,lineHeight:22,color:'#fff'}}>{title}</Text>
          <View style={{alignItems:'flex-start', justifyContent:'flex-start',flexDirection:'row',flexWrap:'nowrap'}}>
              <Text style={{fontSize:13,lineHeight:18,fontWeight:'400',color:'color: rgba(235, 235, 245, 0.6);'}}>{songnumber}</Text>
              <Entypo name="dot-single" size={16} color="color: rgba(235, 235, 245, 0.6);" />
              <Text style={{fontSize:13,lineHeight:18,fontWeight:'400',color:'color: rgba(235, 235, 245, 0.6);'}}>Intrusmental</Text>
          </View>
      </View >
    </View>
  )
}

export default CardConten

const styles = StyleSheet.create({
    top:{
       position: 'relative',
       marginBottom: 8,
    },
    image:{
       borderRadius: 16,
       height:164,
       width:(Dimensions.get('window').width - 16*2 - 15)/2,
       borderWidth:1,
       borderBottomColor: "#21283F",
    },
    icon:{
        position:'absolute',
        height: 32,
        width:32,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 30,
        top:16,
        left: 8,
        backgroundColor: 'rgba(0,0,0,0.72)',
    }
})