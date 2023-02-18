import axios from "axios";
import React, { useEffect } from "react";
import {View,Text,StyleSheet} from "react-native"

function App(){
  useEffect(()=>{
    axios({
      url:"https://jsonplaceholder.typicode.com/posts",
      method:"Get",
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  })
  return(
    <View style={styles.firstsection}>
      <Text>hi</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  firstsection:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})
export default App;