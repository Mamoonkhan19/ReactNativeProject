import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const HederScreen = ({Name,Back}) => {
  return (
    <View style={styles.main}>
      {Back?
      <View>
        <TouchableOpacity><Text>hello</Text></TouchableOpacity>
       </View>
    :null
      }   
    <Text style={styles.Text}>{Name}</Text>
    </View>
)}

export default HederScreen
const styles = StyleSheet.create({
  main:{
    // backgroundColor:'red',
    width:"100%",
    height:40,
    justifyContent:'center',
    alignItems:'center',
    marginTop:29,
    borderColor:"black",
    borderWidth:1,
    shadowColor:'black',
    shadowOpacity:10,
    marginBottom:40,
    
  },
  Text:{
    color:"black"
  }
})