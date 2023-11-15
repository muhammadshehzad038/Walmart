import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

const AppPicker = ({unit,setunit}) => {
  return (
    <View style={styles.Picker}>
        <Picker selectedValue={unit} onValueChange={setunit} mode="dropdown" dropdownIconColor={'white'} >
            <Picker.Item label="hello"  style={{color:'blue'}} /> 
        </Picker>
    </View>
  ) 
}

export default AppPicker

const styles = StyleSheet.create({
  Picker:{
    flex:1,
    position:"relative",
    top:-9,
    left:0,
    width:100,
    height:100,
    borderColor:"white",
    marginRight:8
  },
})