import { StyleSheet, Text, View, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import CardSound from '../../Components/CardSound'
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Composer = () => {
  return (
  <SafeAreaView style={styles.containermain}>
    <ScrollView>
    <View style={{marginLeft:16}}>
            <View style={{ marginBottom:16}}>
                <View style={{marginTop:44, marginBottom:36}}>
                <Text style={styles.title}>Sleep</Text>
                </View>
            </View>
            <View>
              <Text style={styles.category}>Child</Text>
            </View>
            <View style={{marginBottom:14}}>
              <Text style={styles.detail}>Quickly stabilize your baby's emotions</Text>
            </View>
            <ScrollView >
                  <View >
                    <View style={{flexWrap:'nowrap', flexDirection:'row'}}>
                      <View>
                        <CardSound text={'Female voice'} icon={<FontAwsome5 name='child' color="#FFF" size={30} />} backgroundColor={"#21283F"}/>
                      </View>
                      <View style={{marginLeft:16}}>
                        <CardSound text={'White noise'} icon={<Entypo name='sound' color="#FFF" size={30} />} backgroundColor={"#4870FF"}/>
                      </View>
                      <View style={{marginLeft:16}}>
                        <CardSound text={'Lullaby'} icon={<Ionicons name='moon-sharp' color="#FFF" size={30} />} backgroundColor={"#21283F"}/>
                      </View>
                    </View>
                  </View>
            </ScrollView>
            <View>
              <Text style={styles.category}>Nature</Text>
            </View>
            <View style={{marginBottom:14}}>
              <Text style={styles.detail}>It will allow you to merge with nature</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View >
                    <View style={{flexWrap:'nowrap', flexDirection:'row'}}>
                      <View>
                        <CardSound text={'Rain'} icon={<FontAwsome5 name='cloud-moon-rain' color="#FFF" size={30} />} backgroundColor={"#00D971"}/>
                      </View>
                      <View style={{marginLeft:16}}>
                        <CardSound text={'Forest'} icon={<FontAwsome name='tree' color="#FFF" size={30} />} backgroundColor={"#4870FF"}/>
                      </View>
                      <View style={{marginLeft:16}}>
                        <CardSound text={'Waves'} icon={<MaterialIcons name='waves' color="#FFF" size={30} />} backgroundColor={"#21283F"}/>
                      </View>
                      <View style={{marginLeft:16}}>
                        <CardSound text={'Female voice'} icon={<Ionicons name='moon-sharp' color="#FFF" size={30} />} backgroundColor={"#21283F"}/>
                      </View>
                    </View>
                  </View>
            </ScrollView>


            <View>
              <Text style={styles.category}>Animals</Text>
            </View>
            <View style={{marginBottom:14}}>
              <Text style={styles.detail}>Animal voices will improve your sleep</Text>
            </View>
            <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
            
                  <View >
                    <View style={{flexWrap:'nowrap', flexDirection:'row'}}>
                      <View>
                        <CardSound text={'Bird'} icon={<FontAwsome5 name='kiwi-bird' color="#FFF" size={30} />} backgroundColor={"#00D971"}/>
                      </View>
                      <View style={{marginLeft:16}}>
                        <CardSound text={'Cat'} icon={<FontAwsome5 name='cat' color="#FFF" size={30} />} backgroundColor={"#4870FF"}/>
                      </View>
                      <View style={{marginLeft:16}}>
                        <CardSound text={'Frog'} icon={<FontAwsome5 name='frog' color="#FFF" size={30} />} backgroundColor={"#21283F"}/>
                      </View>
                    </View>
                  </View>
            </ScrollView>



            <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
            <View>
              <Text style={styles.category}>Nature</Text>
            </View>
            <View style={{marginBottom:14}}>
              <Text style={styles.detail}>It will allow you to merge with nature</Text>
            </View>
                  <View >
                    <View style={{flexWrap:'nowrap', flexDirection:'row'}}>
                      <View>
                        <CardSound text={'Bird'} icon={<FontAwsome5 name='kiwi-bird' color="#FFF" size={30} />} backgroundColor={"#00D971"}/>
                      </View>
                      <View style={{marginLeft:16}}>
                        <CardSound text={'Cat'} icon={<FontAwsome5 name='cat' color="#FFF" size={30} />} backgroundColor={"#4870FF"}/>
                      </View>
                      <View style={{marginLeft:16}}>
                        <CardSound text={'Frog'} icon={<FontAwsome5 name='frog' color="#FFF" size={30} />} backgroundColor={"#21283F"}/>
                      </View>
                    </View>
                  </View>
            </ScrollView>
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