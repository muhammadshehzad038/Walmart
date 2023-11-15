import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import{GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
const Searchbar = () => {
  return (
    <View>
 <GooglePlacesAutocomplete
        //  onPress={(data, details = null) => {
        //   console.log(data, details);
        // }}
        // query={{key: "AIzaSyCeTNCZbskA1pCLJlINdMziKwi7O6vhfo4",
        //          language:'en'}}
        placeholder="Search Walmart"
        styles={{
            textInputContainer: {
                backgroundColor: "white",
                borderRadius: 50,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
                height:35,
                width:200,
                marginLeft:10
             },
              textInput: {
                borderColor:'white',
                borderRadius:15,
                backgroundColor:'white',
                width:200,
                height:30,
                marginLeft:10

              },
        }}
        renderRightButton={()=>(
            <TouchableOpacity >
                 <Ionicons
                 style={{borderRadius:20}}
              name="search-outline"
              size={15}
              color={'black'}
              backgroundColor={'orange'}
              marginRight={2}
              padding={8}
            />
         </TouchableOpacity>
           
        )
        }
      />
    </View>
  )
}

export default Searchbar

