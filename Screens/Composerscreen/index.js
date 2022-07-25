import { StyleSheet, Text, View, SafeAreaView,ScrollView ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import CardSound from '../../Components/CardSound'
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Composer = () => {
  const [option,setOption] = useState(["Female","Rain","Cats"])
  const data =[
    {
     title:"Child",
     discription:`Quickly stabilize your baby's emotions`,
     backgroundColor: "#4870FF",
     listOptions: [
      {
        text: "Female",
        icon: <FontAwsome5 name='female' color="#FFF" size={30} />
      },
      {
        text: "White noise",
        icon: <Entypo name='sound' color="#FFF" size={30} />
      },
     ],
    },
    {
      title:"Nature",
      discription:`Quickly stabilize your baby's emotions`,
      backgroundColor: "#00D971",
      listOptions: [
       {
         text: "Rain",
         icon: <FontAwsome5 name='cloud' color="#FFF" size={30} />
       },
       {
         text: "Forest",
         icon: <FontAwsome5 name='tree' color="#FFF" size={30} />
       },
      ] 
     },
     {
      title:"Animals",
      discription:`Animal voices will improve your sleep`,
      backgroundColor: "#FF9C41",
      listOptions: [
       {
         text: "Birds",
         icon: <FontAwsome5 name='kiwi-bird' color="#FFF" size={30} />
       },
       {
         text: "Cats",
         icon: <FontAwsome5 name='cat' color="#FFF" size={30} />
       },
       {
        text: "Frogs",
        icon: <FontAwsome5 name='frog' color="#FFF" size={30} />
      },
      ] 
     },
  ]
  return (
  <SafeAreaView style={styles.containermain}>
    <ScrollView>
    <View style={{marginLeft:16}}>
            <View style={{ marginBottom:16}}>
                <View style={{marginTop:44, marginBottom:36}}>
                <Text style={styles.title}>Sleep</Text>
                </View>
            </View>
            {
              data.map((e,i) =>{
                 return ( <View key={i}>
            <View>
              <Text style={styles.category}>{e.title}</Text>
            </View>
            <View style={{marginBottom:14}}>
              <Text style={styles.detail}>{e.discription}</Text>
            </View>
            <ScrollView>
            <View  style={{flexWrap:'nowrap', flexDirection:'row'}}>
                {e.listOptions.map((element,index) =>{
                  return (
                    <TouchableOpacity onPress ={() =>
                    setOption({
                      ...option,
                    })}>
                    <View key={index} style={{marginRight:16}}>
                          <CardSound text={element.text} backgroundColor={option[i] === element.text ? e.backgroundColor: "#21283F"} icon={element.icon}/>
                    </View>
                    </TouchableOpacity>
                  )
                })}
              </View>
              </ScrollView>
                </View>
              )})

            }
        </View>    
      </ScrollView>
  </SafeAreaView>
  )
}

export default Composer

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
 category:{
    height:22,
    fontSize:17,
    color: "#FFF",
 },
 detail:{
   color:'rgba(235, 235, 245, 0.6)',
   fontWeight:'400',
   fontSize:12,

 }
})