import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,ScrollView,Dimensions } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CardConten from '../../Components/CardConten'

const AlbumDetail = () => {
    const data =[
        {
           title:"Guitar Camp",
           songNumber:"7 Songs",
           type:"instrumental",
           discription:"An acoustic mix has been specially selected for you. The camping atmosphere will help you improve your sleep and your body as a whole. Your dreams will be delightful and vivid.",
           textColor: 'rgba(235, 235, 245, 0.6)',
           songList: [
            {
                number: '01',
                songName:'The Guitar',
                icon: <Entypo name='controller-play' size={20} color='#FFF'/>,
                borderBottomWidth: 2,
            },
            {
                number: '02',
                songName:'The Guitar',
                icon: <FontAwesome name='pause' size={20} color='#FFF'/>,
                borderBottomWidth: 2,
            },
            {
                number: '03',
                songName:'The Guitar',
                icon: <Entypo name='lock' size={20} color='#FFF'/>,
                borderBottomWidth: 2,
            },
            {
                number: '04',
                songName:'The Guitar',
                icon: <Entypo name='lock' size={20} color='#FFF'/>,
            },
           ]
        },
    ]
    const feature =[
        {
            title: "Chill-hop",
            image: require("../../assets/album5.png"),
            songnumber: "7 Songs ",
            backgroundColor:"#141927"
        },
        {
            title: "Lullbaly",
            image: require("../../assets/album6.png"),
            songnumber: "7 Songs ",
            backgroundColor:"#141927"
        }
    ]
  return (
    <SafeAreaView style={styles.maincontainer}>
        <View>
        <TouchableOpacity style={styles.backbox}>
               <MaterialIcons name="arrow-back-ios" color={"#4870FF"} size={20}/>
              <Text style={{color:"#4870FF",fontWeight:'400',fontSize:17}}>Sleep</Text>
        </TouchableOpacity>
        </View>

        {
             data.map((e,i) =>{
                return (
                  <View key={i} style={styles.detailbox}>
                     <View style={{marginHorizontal:16,marginTop:24}}>
                <Text style={{fontWeight:'700',fontSize:34, lineHeight:41, color:"#FFF"}}>{e.title}</Text>
            </View>
            <View style={{flexDirection:'row',marginHorizontal:16,alignItems:'center',marginBottom:26}}>
                <Text style={{color:e.textcolor,fontSize:15,fontWeight:'400',lineHeight:20}}>{e.songnumber}</Text>
                <Entypo name="dot-single" color={e.textcolor} size={15}></Entypo>
                <Text style={{color:e.textcolor,fontSize:15,fontWeight:'400',lineHeight:20}}>{e.type}</Text>
            </View>
            <View style={styles.choosebox}>
                <TouchableOpacity style={styles.button1}>
                    <Entypo name="controller-play" size={25} color={'#FFF'}/>
                    <Text style={{fontWeight:'600',fontSize:17,lineHeight:22,color:"#FFF",marginLeft:5.8}}>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <FontAwesome name="star-half-empty" size={25} color={'#FF9C41'}/>
                    <Text style={{fontWeight:'600',fontSize:17,lineHeight:22,color:"#FF9C41",marginLeft:5.8}}>Unfavorite</Text>
                </TouchableOpacity>
            </View>
            <ScrollView vertical={true}>
            <View style={{marginHorizontal:16,marginBottom:16}}>
           <View>
                <Text style={{color:'#FFFF',fontWeight:'700',fontSize:17,lineHeight:22}}>About this pack</Text>
           </View>
           <View style={{width: Dimensions.get("window").width, marginBottom:16}}>
                <Text style={{color:'rgba(235, 235, 245, 0.6)',fontWeight:'400',fontSize:17,lineHeight:22}}>
                {e.discription}
                </Text>
            </View> 
              </View>
              <View style={{marginHorizontal: Dimensions.get("window").width-395,height:269,backgroundColor:'#21283F',borderRadius:16}}>
              <View style={{marginTop:22,marginHorizontal:16,marginBottom:4}}>
                       <Text style={{fontWeight:'400',fontSize:13,lineHeight:18,color:'rgba(235, 235, 245, 0.6)'}}>LIST OF SONGS</Text>
                   </View>
                {
                    e.songList.map((element,index) =>{
                        return (
                        <View style={{width:380,height:56,alignItems:'center',flexDirection:'row',borderBottomWidth:element.borderBottomWidth,borderBottomColor:'#2D344B'}}>
                                 <View style={{marginHorizontal:16}}>
                           <Text style={{fontWeight:'400',fontSize:13,lineHeight:18,color:'rgba(235, 235, 245, 0.6)'}}>{element.number}</Text>
                       </View>
                       <TouchableOpacity style={{width:32,height:32,borderRadius:20,backgroundColor:'#141927',justifyContent:'center',alignItems:'center',marginLeft:8}}>
                           {element.icon}
                       </TouchableOpacity>
                       <View style={{marginLeft:16}}>
                       <Text style={{fontWeight:'400',fontSize:17,lineHeight:22,color:'#FFF'}}>{element.songName}</Text>
                      </View>
                             </View>
                    )})
                }
            </View>
            <View>
                <Text style={{fontWeight:'600',fontSize:17,marginHorizontal:16, color:'#FFF',marginBottom:2, marginTop:20}}>Feautre on</Text>
            </View>
            <View style ={{
                   alignItems:'flex-start',
                   justifyContent:'space-between',
                   flexDirection:'row',
                   flexWrap:'wrap',
                   paddingHorizontal: 16,
               }}>
               {feature.map((element, index) => {
            return (
              <View key={index} style={{height:Dimensions.get('window').height}}>
                <CardConten image={element.image} title={element.title} songnumber={element.songnumber} category={element.category} backgroundColor={element.backgroundColor}/>
              </View>
            );
          })}
               </View>
            </ScrollView>
                  </View>    
                )
             })
        }   
    </SafeAreaView>
  )
}

export default AlbumDetail

const styles = StyleSheet.create({
    maincontainer:{
        backgroundColor:"#090E18",
        flex:1,
    },
    backbox:{
        marginTop:44,
        marginBottom: 8,
        alignItems:'center',
        height:44,
        marginLeft: Dimensions.get("window").width-400,
        flexDirection:'row',
        flexWrap:'nowrap',
    },
    detailbox:{
        height:Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        backgroundColor:"#141927",
        borderTopRightRadius:24,
        borderTopLeftRadius:24,
    },
    button1:{
        width:164,
        height:38,
        backgroundColor:'#4870FF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        flexDirection:'row',

    },
    button2:{
        width:164,
        height:38,
        backgroundColor:'#21283F',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        flexDirection:'row',

    },
    choosebox:{
        width: Dimensions.get("window").width,
        height:84,
        borderBottomWidth:2,
        borderTopWidth:2, borderColor:'#21283F',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'nowrap',
        justifyContent:'space-evenly',
        paddingHorizontal:16,
        marginBottom:9,
    }
})