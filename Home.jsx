import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import HederScreen from '../compunet/HederScreen'

const Home = ({navigation}) => {
  const [data, setData] = useState([])
  
  // Calling the API
  useEffect(() => {
    async function getapi() {
      try {
        const res = await fetch("https://fakestoreapi.com/products")
        const jsonRes = await res.json()
        setData(jsonRes)
      } catch (error) {
        console.log(error)
      }
    }
    getapi()
  }, [])
  
  const renderItem = ({ item }) => (
    <View style={styles.card}>
        <TouchableOpacity onLongPress={()=>navigation.navigate('MoreDeatails',{items:item})}>
      <Image source={{uri:item.image}} style={styles.img}/>
        <Text style={styles.Text}>{item.title}</Text>
        <Text style={styles.Text}>Price : {item.price}</Text>
        </TouchableOpacity>
      
    </View>
  )

  
  return (
    <View style={styles.container}>
      <HederScreen Name={"Products"} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
   
   
   
    
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
 card:{
    display:'flex',
    flexDirection:'row',
    // justifyContent:'center',
    // alignItems:'center',
    // borderColor:'red',
    borderWidth:1,
    marginTop:10,
    width:"80%",
    marginLeft:40,
    borderRadius:20,
    padding:10,
    shadowColor:'gray',
    shadowOpacity:40,
    
   
 },
 container:{
    padding:10,
 },
 img:{
    width:"80%",
    height:80,
    marginLeft:10
 },
 Text:{
    marginTop:10,
 }
})
