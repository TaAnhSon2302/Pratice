import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Alert,ScrollView } from 'react-native';
import ButtonCustom from './Components/ButtonCustom';
import CardSound from './Components/CardSound';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons  from 'react-native-vector-icons/Ionicons';
import Tag from './Components/Tag';
export default function App() {
  return (
    <SafeAreaView  style={styles.launchscreen}>
      <View>
      <ButtonCustom text={"Next"} onPress={()=>Alert.alert("Next")}/>
      </View>
      <View>
      <ButtonCustom text={"Start"}/>
      </View>
      <View>
      <ButtonCustom text={"Back"}/>
      </View>
     
     <View style={{flexDirection: "row" ,flexWrap:"nowrap", marginLeft:16, marginBottom:20}}>
         <View style={{marginLeft:16,width:66}}>
           <Tag icon={<Ionicons name="keypad" size={20} color="#FFF"/>} text={"All"}/>
         </View>
         <View style={{marginLeft:16,width:111}}>
           <Tag icon={<MaterialCommunityIcons name="human-handsup" size={20} color="#FFF"/>} text={"Ambient"}/>
         </View>
         <View style={{marginLeft:16,width:107}}>
           <Tag icon={<FontAwesome name="child" size={20} color="#FFF"/>} text={"For Kids"}/>
         </View>
       </View>
     <ScrollView horizontal={true} style={{marginLeft:16,flexDirection:"row",flexWrap:"nowrap"}}>
       <View style={{marginLeft:16}}>
       <CardSound text={"Female"} backgroundColor={"#4870FF"} icon={<FontAwesome name="female" size={30} color="#FFF"/>} />
       </View>
       <View style={{marginLeft:16}}>
       <CardSound text={"Rain"} backgroundColor={"#00D971"} icon={<Feather name="cloud-rain"  size={30} color="#FFF"/>}/>
       </View>
       <View style={{marginLeft:16}}>
       <CardSound text={"Bird"} backgroundColor={"#FF9C41"} icon={<FontAwesome5 name="kiwi-bird" size={30} color="#FFF"/>}/>
       </View>
       <View style={{marginLeft:16}}>
       <CardSound text={"Female"} backgroundColor={"#4870FF"} />
       </View >
       <View style={{marginLeft:16}}>
       <CardSound text={"Female"} backgroundColor={"#4870FF"} />
       </View >
       <View style={{marginLeft:16}}>
       <CardSound text={"Female"} backgroundColor={"#4870FF"} />
       </View >
       <View style={{marginLeft:16}}>
       <CardSound text={"Female"} backgroundColor={"#4870FF"} />
       </View >
     </ScrollView>
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  launchscreen: {
    flex: 1,
    backgroundColor: '#141927',
    paddingTop: 80,
    // paddingLeft: 89,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
