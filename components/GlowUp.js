import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'; 

const GlowUp = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection:'row'}}>
        <View style={{marginTop:5,padding:10}}>
            <Image source={require('../assests/c.webp')} style={Styles.img}/>
            <TouchableOpacity style={{position:'absolute', right:20 , top:20, backgroundColor:'white',borderRadius:14}}>
             <Entypo name="heart-outlined" size={24} color="black" /> 
            </TouchableOpacity>
            <Text style={Styles.txt}>Now $674.99 </Text>
            <Text style={Styles.txt3}> $999.99 </Text>
            <Text style={Styles.txt2}>COLORWAY 20x3.0</Text>
            <Text style={Styles.txt2}>Electric Bike ...</Text>
            <TouchableOpacity style={Styles.btn}>
                <Text style={Styles.btntxt}>Options</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:5,padding:10}}>
            <Image source={require('../assests/comb.webp')} style={Styles.img}/>
            <TouchableOpacity style={{position:'absolute', right:20 , top:20, backgroundColor:'white',borderRadius:14}}>
             <Entypo name="heart-outlined" size={24} color="black" /> 
            </TouchableOpacity>
            <Text style={Styles.txt}>Now $129.99 </Text>
            <Text style={Styles.txt3}> $169.99 </Text>
            <Text style={Styles.txt2}>Homfa Full Bed</Text>
            <Text style={Styles.txt2}>Frame, White Fa..</Text>
            <TouchableOpacity style={Styles.btn}>
                <Text style={Styles.btntxt}>Options</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:5,padding:10}}>
            <Image source={require('../assests/cream.webp')} style={Styles.img}/>
            <TouchableOpacity style={{position:'absolute', right:20 , top:20, backgroundColor:'white',borderRadius:14}}>
             <Entypo name="heart-outlined" size={24} color="black" /> 
            </TouchableOpacity>
            <Text style={Styles.txt}>Now $134.99 </Text>
            <Text style={Styles.txt3}> $299.99 </Text>
            <Text style={Styles.txt2}>COLORWAY 20x3.0</Text>
            <Text style={Styles.txt2}>Electric Bike ...</Text>
            <TouchableOpacity style={Styles.btn}>
            <View style={{flexDirection:'row'}}>
            <Ionicons
                 style={{borderRadius:20,}}
              name="add"
              size={22}
              color={'black'}

            />
                <Text style={{color:'black',paddingHorizontal:3,padding:2, fontWeight:'bold'}}>Add</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:5,padding:10}}>
            <Image source={require('../assests/sl.webp')} style={Styles.img}/>
            <TouchableOpacity style={{position:'absolute', right:20 , top:20,backgroundColor:'white',borderRadius:14}}>
             <Entypo name="heart-outlined" size={24} color="black" /> 
            </TouchableOpacity>
            <Text style={Styles.txt}>Now $79.99 </Text>
            <Text style={Styles.txt3}> $99.99 </Text>
            <Text style={Styles.txt2}>Dreo Tower Fan</Text>
            <Text style={Styles.txt2}>For Home,90&deg; ...</Text>
            <TouchableOpacity style={Styles.btn}>
                <View style={{flexDirection:'row'}}>
            <Ionicons
                 style={{borderRadius:20,}}
              name="add"
              size={22}
              color={'black'}

            />
                <Text style={{color:'black',paddingHorizontal:3,padding:2, fontWeight:'bold'}}>Add</Text>
                </View>

            </TouchableOpacity>
            </View>
            <View style={{marginTop:5,padding:10}}>
            <Image source={require('../assests/pen.webp')} style={Styles.img}/>
            <TouchableOpacity style={{position:'absolute', right:20 , top:20, backgroundColor:'white',borderRadius:14}}>
             <Entypo name="heart-outlined" size={24} color="black" /> 
            </TouchableOpacity>
            <Text style={Styles.txt}>Now $189.99 </Text>
            <Text style={Styles.txt3}> $999.99 </Text>
            <Text style={Styles.txt2}>Twin mettress,</Text>
            <Text style={Styles.txt2}>Molblly 10" Hybri...</Text>
            <TouchableOpacity style={Styles.btn}>
                <Text style={Styles.btntxt}>Options</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:5,padding:10}}>
            <Image source={require('../assests/pantene.webp')} style={Styles.img}/>
            <TouchableOpacity style={{position:'absolute', right:20 , top:20, backgroundColor:'white',borderRadius:14}}>
             <Entypo name="heart-outlined" size={24} color="black" /> 
            </TouchableOpacity>
            <Text style={Styles.txt}>Now $26.37 </Text>
            <Text style={Styles.txt2}>Men's 5-Pack</Text>
            <Text style={Styles.txt2}>Lightweight...</Text>
            <TouchableOpacity style={Styles.btn}>
                <Text style={Styles.btntxt}>Options</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:5,padding:10}}>
            <Image source={require('../assests/pre.webp')} style={Styles.img}/>
            <TouchableOpacity style={{position:'absolute', right:20 , top:20, backgroundColor:'white',borderRadius:14}}>
             <Entypo name="heart-outlined" size={24} color="black" /> 
            </TouchableOpacity>
            <Text style={Styles.txt}>Now $169.99 </Text>
            <Text style={Styles.txt3}> $2699.99 </Text>
            <Text style={Styles.txt2}>iRerts Ride on</Text>
            <Text style={Styles.txt2}>Cars, 12V</Text>
            <TouchableOpacity style={Styles.btn}>
                <Text style={Styles.btntxt}>Options</Text>
            </TouchableOpacity>
            </View>
           
            <View style={{marginTop:5,padding:10}}>
            <Image source={require('../assests/juicy.webp')} style={Styles.img}/>
            <TouchableOpacity style={{position:'absolute', right:20 , top:20, backgroundColor:'white',borderRadius:14}}>
             <Entypo name="heart-outlined" size={24} color="black" /> 
            </TouchableOpacity>
            <Text style={Styles.txt}>Now $359.99 </Text>
            <Text style={Styles.txt3}> $449.99 </Text>
            <Text style={Styles.txt2}>JONPONY Power</Text>
            <Text style={Styles.txt2}>Lift Recliner Cha...</Text>
            <TouchableOpacity style={Styles.btn}>
                <Text style={Styles.btntxt}>Options</Text>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:5,padding:10}}>
            <Image source={require('../assests/perf.webp')} style={Styles.img}/>
            <TouchableOpacity style={{position:'absolute', right:20 , top:20, backgroundColor:'white',borderRadius:14}}>
             <Entypo name="heart-outlined" size={24} color="black" /> 
            </TouchableOpacity>
            <Text style={Styles.txt}>Now $674.99 </Text>
            <Text style={Styles.txt3}> $999.99 </Text>
            <Text style={Styles.txt2}>COLORWAY 20x3.0</Text>
            <Text style={Styles.txt2}>Electric Bike ...</Text>
            <TouchableOpacity style={Styles.btn}>
                <Text style={Styles.btntxt}>Options</Text>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:5,padding:10}}>
            <Image source={require('../assests/per.webp')} style={Styles.img}/>
            <TouchableOpacity style={{position:'absolute', right:20 , top:20, backgroundColor:'white',borderRadius:14}}>
             <Entypo name="heart-outlined" size={24} color="black" /> 
            </TouchableOpacity>
            <Text style={Styles.txt}>Now $219.99 </Text>
            <Text style={Styles.txt3}> $269.99 </Text>
            <Text style={Styles.txt2}>Options from $219</Text>
            <Text style={Styles.txt2}>-$269.00</Text>
            <Text style={Styles.txt2}>GangMei Metal</Text>
            <Text style={Styles.txt2}>Rolling storage</Text>
            <TouchableOpacity style={Styles.btn}>
                <Text style={Styles.btntxt}>Options</Text>
            </TouchableOpacity>
            </View>
         </ScrollView>
  )
}
const Styles=StyleSheet.create({
    img:{
        height:140,
        width:140,
        paddingTop:10
    },
    txt:{
        color:'green',
        fontSize:22,
        fontWeight:'bold',
        padding:3
    },
    txt2:{
        padding:3,
        color:'black',
        fontSize:14
    },
    txt3:{
        color:'black',
        textDecorationLine:'line-through'
    },
    btn:{
        padding:4,
        borderColor:'black',
        borderRadius:16,
        borderWidth:1,
        height:32,
        width:80
        },
    btntxt:{
        paddingHorizontal:5,
        color:'black',
        fontSize:14,
        fontWeight:'bold'
    },
})  

export default GlowUp