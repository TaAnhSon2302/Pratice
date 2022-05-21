import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Alert,ScrollView } from 'react-native';
import AlbumSrceen from './Screens/albumsreen/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Composer from './Screens/Composerscreen';
import FontAwsome5 from  'react-native-vector-icons/FontAwesome5'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
function HomeScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarStyle:{
           backgroundColor:"#21283F",
           positon: 'relative',
           bottom: 0,
           marginHorizontal: 0,
           height: 60,
           borderTopWidth: 0,
      },
    }}>
      <Tab.Screen name="Discover" component={AlbumSrceen} options={{
         headerShown: false,
         tabBarIcon: ({focused}) =>(
           <View>
             <FontAwsome5 name='cloud-moon' 
             size={20} 
             color ={focused ? "#4870FF": "#8E8E93" }>
               
             </FontAwsome5>
           </View>
         ),
      }} >

      </Tab.Screen>
      <Tab.Screen name="Composer" component={Composer} options={{
         headerShown: false,
         tabBarIcon: ({focused}) =>(
           <View>
             <Entypo name='beamed-note' 
             size={20} 
             color ={focused ? "#4870FF": "#8E8E93"}>
               
             </Entypo>
           </View>
         ),
      }} ></Tab.Screen>
      <Tab.Screen name="Profile" component={SettingsScreen} options={{
         headerShown: false,
         tabBarIcon: ({focused}) =>(
           <View>
             <FontAwsome5 name='user' 
             size={20} 
             color ={focused ? "#4870FF": "#8E8E93"}>
               
             </FontAwsome5>
           </View>
         ),
      }}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  launchscreen: {
    flex: 1,
    backgroundColor: '#141927',
    // paddingLeft: 89,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
