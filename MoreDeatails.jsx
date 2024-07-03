import { View, Text,StyleSheet ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import HederScreen from '../compunet/HederScreen'
import { ScrollView } from 'react-native-gesture-handler'

const MoreDeatails = ({route}) => {
  const {items} = route.params || {}

  return (

    <View style={styles.main}>
      <HederScreen Name={"Moredetail"}/>
      <View style={styles.detail}>
        <Image source={{uri:items.image}} style={styles.image}/>
        <Text style={styles.Text}>{items.description}</Text>
        <Text style={styles.Text}>Rating : {items.rating.rate}</Text>
        <Text style={styles.Text}>Price : {items.price}</Text>
        <Text style={styles.Text}>Category : {items.category}</Text>
        <TouchableOpacity>
          <Text style={styles.Texts}>Buy it</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default MoreDeatails
const styles = StyleSheet.create({
  main:{
    flex:1,
    padding:10,
  },
  detail:{
    borderColor:'black',
    borderWidth:1,
    shadowOpacity:10,
    elevation:1,
    width:'100%',
    height:"90%"
  },
  image:{
    width:"100%",
    height:"50%",
  },
  Text:{
    marginTop:10,
    padding:10,
  },
   Texts:{
    marginTop:10,
    padding:10,
    width:59,
    // borderColor:"black",
    borderWidth:1,
    backgroundColor:'gray',
    borderRadius:20,
    marginLeft:10
  }
})