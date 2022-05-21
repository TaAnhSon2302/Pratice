import { StyleSheet, Text, SafeAreaView,View,ScrollView ,Dimensions} from 'react-native'
import React from 'react'
import CardConten from '../../Components/CardConten'
import Tag from '../../Components/Tag'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const AlbumSreen = () => {
    const dataMusic =[
        {
            title: "Guitar Camp",
            image: require("../../assets/album1.png"),
            songnumber: "7 Songs ",
        },
        {
            title: "Chill-hop",
            image: require("../../assets/album2.png"),
            songnumber: "7 Songs ",
        },
        {
            title: "Pack name",
            image: require("../../assets/album3.png"),
            songnumber: "4 Hours ",
        },
        {
            title: "Guitar Camp",
            image: require("../../assets/album4.png"),
            songnumber: "4 Hours ",
        },
        {
            title: "Guitar Camp",
            image: require("../../assets/album4.png"),
            songnumber: "4 Hours ",
        },
        {
            title: "Guitar Camp",
            image: require("../../assets/album4.png"),
            songnumber: "4 Hours ",
        },
        {
            title: "Guitar Camp",
            image: require("../../assets/album4.png"),
            songnumber: "4 Hours ",
        },
    ];
  return (
    <SafeAreaView style={styles.containermain}>
        <View style={styles.container}>
            <View style={{paddingHorizontal:16, marginBottom:16}}>
                <View style={{marginTop:44}}>
                <Text style={styles.title}>Sleep</Text>
                </View>
            </View>
           <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} style={{marginBottom:20}}>
               <View style={{flexWrap:'nowrap', flexDirection:'row', marginLeft:10}}>
                   <View style={{marginRight: 16}}>
                       <Tag
                       name={"All"}
                       icon={<Ionicons name="keypad" size={20} color="#FFF"/>}
                       />
                   </View>
                   <View style={{marginRight: 16}}>
                       <Tag
                       name={"Ambient"}
                       icon ={<FontAwesome name="female" size={20} color="#FFF"/>}
                       />
                   </View>
                   <View style={{marginRight: 16}}>
                       <Tag
                       name={"For Kids"}
                       icon={<MaterialIcons name='child-friendly' size={20} color="#FFF"/>}
                       />
                   </View>
               </View>
           </ScrollView>

           <ScrollView  style={{height:Dimensions.get("window").height-240}}>
               <View style ={{
                   alignItems:'flex-start',
                   justifyContent:'space-between',
                   flexDirection:'row',
                   flexWrap:'wrap',
                   paddingHorizontal: 16,
               }}>
               {dataMusic.map((element, index) => {
            return (
              <View key={index}>
                <CardConten image={element.image} title={element.title} songnumber={element.songnumber} category={element.category}/>
              </View>
            );
          })}
               </View>
           </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default AlbumSreen

const styles = StyleSheet.create({
    title:{
       fontWeight: '700',
       fontSize:34,
       lineHeight: 41,
       color: '#FFF',
    },
    containermain:{
        flex: 1,
        backgroundColor: "#090E18",
        paddingTop:40,
    }
})