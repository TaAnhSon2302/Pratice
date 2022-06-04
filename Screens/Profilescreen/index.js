import { StyleSheet, Text, View,SafeAreaView, Dimensions,TouchableOpacity,ScrollView } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import React from 'react'


const ProfileScreen = () => {
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
            <View style={{borderTopWidth:1, borderTopColor:'#21283F'}}>
            <View style={{flexDirection:'row', flexWrap:'nowrap',height:44}}>
            </View>
            </View>
            <View style={{borderTopWidth:1, borderTopColor:'#21283F',borderBottomWidth:1,borderBottomColor:'#21283F'}}>
            <View style={{flexDirection:'row', flexWrap:'nowrap',alignItems:'center',height:44}}>
                <View style={styles.iconbox}>
                    <FontAwesome5 name='crown' size={20} color={'#FFF'}/>
                </View>
              <Text style={{color:'#FF9C41'}}>Get premium</Text>
              <MaterialIcons style={{marginLeft:Dimensions.get('window').width-190}} name='arrow-forward-ios' color='#FF9C41' size={20}/>
            </View>
            </View>

            <View style={{borderTopWidth:1, borderTopColor:'#21283F'}}>
            <View style={{flexDirection:'row', flexWrap:'nowrap',height:44}}>
            </View>
            </View>
            
            <View style={{borderTopWidth:1, borderTopColor:'#21283F',borderBottomWidth:1,borderBottomColor:'#21283F'}}>
            <View style={{flexDirection:'row', flexWrap:'nowrap',alignItems:'center',height:44}}>
                <View style={styles.iconbox}>
                    <FontAwesome5 name='crown' size={20} color={'#FFF'}/>
                </View>
              <Text style={{color:'#FF9C41'}}>Get premium</Text>
              <MaterialIcons style={{marginLeft:Dimensions.get('window').width-190}} name='arrow-forward-ios' color='#FF9C41' size={20}/>
            </View>
            </View>
            <View style={{borderTopWidth:1, borderTopColor:'#21283F',borderBottomWidth:1,borderBottomColor:'#21283F'}}>
            <View style={{flexDirection:'row', flexWrap:'nowrap',alignItems:'center',height:44}}>
                <View style={styles.iconbox}>
                    <FontAwesome5 name='crown' size={20} color={'#FFF'}/>
                </View>
              <Text style={{color:'#FF9C41'}}>Get premium</Text>
              <MaterialIcons style={{marginLeft:Dimensions.get('window').width-190}} name='arrow-forward-ios' color='#FF9C41' size={20}/>
            </View>
            </View>
            <View style={{borderTopWidth:1, borderTopColor:'#21283F'}}>
            <View style={{flexDirection:'row', flexWrap:'nowrap',height:44}}>
            </View>
            </View>
            <View style={{borderTopWidth:1, borderTopColor:'#21283F',borderBottomWidth:1,borderBottomColor:'#21283F'}}>
            <View style={{flexDirection:'row', flexWrap:'nowrap',alignItems:'center',height:44}}>
                <View style={styles.iconbox}>
                    <FontAwesome5 name='crown' size={20} color={'#FFF'}/>
                </View>
              <Text style={{color:'#FF9C41'}}>Get premium</Text>
              <MaterialIcons style={{marginLeft:Dimensions.get('window').width-190}} name='arrow-forward-ios' color='#FF9C41' size={20}/>
            </View>
            </View>
            <View style={{borderTopWidth:1, borderTopColor:'#21283F',borderBottomWidth:1,borderBottomColor:'#21283F'}}>
            <View style={{flexDirection:'row', flexWrap:'nowrap',alignItems:'center',height:44}}>
                <View style={styles.iconbox}>
                    <FontAwesome5 name='crown' size={20} color={'#FFF'}/>
                </View>
              <Text style={{color:'#FF9C41'}}>Get premium</Text>
              <MaterialIcons style={{marginLeft:Dimensions.get('window').width-190}} name='arrow-forward-ios' color='#FF9C41' size={20}/>
            </View>
            </View>
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
    iconbox:{
        height:28,
        width:28,
        backgroundColor:'#FF9C41',
        borderRadius: 8,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    }
})