import React, { useState } from 'react'
import { Text, View, SafeAreaView, TextInput, Button, StyleSheet, Dimensions } from 'react-native'
const App = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [country, setCountry] = useState("")
  const [Muste, setMuste] = useState("")
  const [Street, setStreet] = useState("")
  const [Post, setPost] = useState("")
  const [City, setCity] = useState("")
  const OnCountry = (text) => {
    setCountry(text)
  }
  const OnMuste = (text) => {
    setMuste(text)
  }
  const OnStreet = (text) => {
    setStreet(text)
  }
  const OnPost = (text) => {
    setPost(text)
  }
  const OnCity = (text) => {
    setCity(text)
  }
  const handleClick = () => {
    if (country && Muste && Street && Post && City) {
      let obj = {
        country,
        Muste,
        Street,
        Post,
        City
      }
      console.log(obj, "obj");
      alert("Data Save")

    }
    else {
      alert("Enter Data Carefully")
    }
  }
  return (
    <View style={{ height: windowHeight, backgroundColor: "red" }}>
      <SafeAreaView >
        <View style={{ height: windowHeight / 10, display: "flex", justifyContent: "center" }}>
          <Text style={styles.text}>Address:</Text>
          <Text style={styles.text1}>Plz enter your main residence</Text>
        </View>
        <View>
          <View style={{ height: windowHeight / 2, display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column" }}>
            <TextInput style={styles.inputs} value={country} placeholder='Country' onChangeText={OnCountry}></TextInput>
            <TextInput style={styles.inputs} value={Muste} placeholder='Muste' onChangeText={OnMuste}></TextInput>
            <TextInput style={styles.inputs} value={Street} placeholder='Street Additions' onChangeText={OnStreet}></TextInput>
            <TextInput style={styles.inputs} value={Post} placeholder='Post Code' onChangeText={OnPost}></TextInput>
            <TextInput style={styles.inputs} value={City} placeholder='City' onChangeText={OnCity}></TextInput>
          </View>

          {!country && !Muste && !Street && !Post && !City && <Button title='Next' disabled />}
          {country.length > 0 && Muste.length > 0 && Street.length > 0 && Post.length > 0 && City.length > 0 && <Button title='able' onPress={handleClick} />}


        </View>
      </SafeAreaView >
    </View >

  )
}
const styles = StyleSheet.create({

  text: {
    color: "white",
    fontSize: 25
    ,
    marginLeft: 10
  }, text1: {
    color: "white",
    fontSize: 15,
    marginLeft: 10

  },
  inputs: {
    // border: "1px solid black",
    backgroundColor: "yellow",
    width: 340,
    borderRadius: 10,
    padding: 10,
    // marginTop: 10
  }
})
export default App