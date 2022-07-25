import { StyleSheet, Text, View,SafeAreaView, Dimensions,TouchableOpacity,ScrollView } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import React from 'react'


const ProfileScreen = () => {
    const data = [
        {
            text:"Get premium",
            backgroundColor:"#FF9C41",
            icon:  <FontAwesome5 name='crown' size={20} color={'#FFF'}/>,
            arrowcolor:'#FF9C41',
            textcolor: '#FF9C41',
            marginLeft:Dimensions.get('window').width-190,
        },
        {
            
        },
        {
            text:"Get premium",
            backgroundColor:"#00D971",
            icon:  <FontAwesome name='file-text-o' size={20} color={'#FFF'}/>,
            arrowcolor:'#2D344B',
            textcolor: '#FFF',
            marginLeft:Dimensions.get('window').width-190,
        },
        {
            text:"License agreement",
            backgroundColor:"#00D971",
            icon:  <FontAwesome name='file-text-o' size={20} color={'#FFF'}/>,
            arrowcolor:'#2D344B',
            textcolor: '#FFF',
            marginLeft:Dimensions.get('window').width-230,
        },
        {
            
        },
        {
            text:"Rate us",
            backgroundColor:"#FF2D55",
            icon:  <FontAwesome5 name='drafting-compass' size={20} color={'#FFF'}/>,
            arrowcolor:'#2D344B',
            textcolor: '#FFF',
            marginLeft:Dimensions.get('window').width-150,
        },
        {
            text:"Send Feedback",
            backgroundColor:"#FF2D55",
            icon:  <MaterialCommunityIcons name='mailbox' size={20} color={'#FFF'}/>,
            arrowcolor:'#2D344B',
            textcolor: '#FFF',
            marginLeft:Dimensions.get('window').width-200,
        },
    ]
  return (
   <SafeAreaView style={styles.containermain}>
            <View style={{ marginBottom:23}}>
                 <View style={{marginTop:44,marginLeft:16}}>
            <Text style={styles.title}>Profile</Text>
                </View> 
            </View>
            <View style={styles.author}>
            <View style={styles.bigbox}>
                <FontAwesome name='user-secret' size={70} color="#141927"/>
                <Text style={{ fontSize:17, fontWeight:'700',lineHeight:22, color:'#FFFFFF'}}>Authorization</Text>
                <Text style={{textAlign:'center',fontWeight:'400',fontSize:13,lineHeight:18,paddingHorizontal:40}}>In order to access the library of favorite packs of sounds, log in with Apple ID</Text>
                <TouchableOpacity  style={styles.loginbox}>
                    <Text style={{fontWeight:'700',fontSize:17,lineHeight:22,color:"#FFF"}}>Login with Apple ID</Text>
                </TouchableOpacity>
            </View>
            </View>
           

            <ScrollView>
                {
                   data.map((e,i) =>{
                     return (
                        <View key={i}>
            <TouchableOpacity style={{borderTopWidth:1, borderTopColor:'#21283F',borderBottomWidth:1,borderBottomColor:'#21283F'}}>
                <View style={{flexDirection:'row', flexWrap:'nowrap',alignItems:'center',height:44}}>
                <View style={{  
                height:28,
                backgroundColor: e.backgroundColor,
                width:28,
                borderRadius: 8,
                marginHorizontal: 16,
                alignItems: 'center',
                justifyContent: 'center',}}>
                   {e.icon}
                </View>
              <Text style={{color: e.textcolor}}>{e.text}</Text>
              <MaterialIcons style={{marginLeft:e.marginLeft}} name='arrow-forward-ios' color={e.arrowcolor} size={20}/>
               </View>
            </TouchableOpacity>  
                        </View>
                     )
                   })
                }
            </ScrollView>
   </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    containermain:{
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#090E18",
    },
    title:{
        fontWeight: '700',
        fontSize:34,
        lineHeight: 41,
        color: '#FFF',
    },
    author:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 33,
    },
    bigbox:{
        height: 252,
        width: Dimensions.get("window").width -32,
        backgroundColor:"#2D344B",
        borderRadius:24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginbox:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141927',
        width: Dimensions.get("window").width-112,
        borderRadius: 100,
        marginTop:24,
    },
})