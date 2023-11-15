import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Searchbar from '../components/Searchbar';
import AppPicker from '../components/Picker';
import VerticalBar from '../components/VerticalBar';
import GlowUp from '../components/GlowUp';

 export default function Home() {
  return (
      <><View style={styles.container}>
      <View style={[styles.position,{padding:10}]}>
        <TouchableOpacity>
          <Ionicons name="options-outline" color={'white'} size={35} />
        </TouchableOpacity>
        <Image source={require('../assests/wal.jpg')}
          style={styles.imglogo} />
        <Searchbar />
        <TouchableOpacity style={styles.cart}>
          <Ionicons name={'cart-outline'} size={30} color={'white'} />
          <Text style={{ fontSize: 10, color: 'white', marginLeft: 4 }}>$0.00</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding:10, flexDirection: 'row' }}>
        <Image style={{ height: 30, width: 30 }} source={require('../assests/1.webp')} />
        <Text style={styles.txt}>How do you want your items?</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.txt}>95829</Text>
        <AppPicker />
      </View>
    </View>
        <ScrollView>
          <View style={{ margin: 15 }}>
            <ImageBackground
              source={require('../assests/3.webp')} borderRadius={15} style={{ height: 180, width: 320, borderRadius: 0 }}>
              <Text style={styles.imgtxt}>Get it as fast as today</Text>
              <Text style={styles.imgtxt2}>College Prep </Text>
              <TouchableOpacity>
                <Text style={styles.shop}>Shop Now</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column'}}>
          <View style={{ margin: 10 }}>
            <ImageBackground
              source={require('../assests/book.jpg')} borderRadius={15} style={{ height: 160, width: 160, padding:15}}>
              <Text style={styles.txt1}>All you need to study</Text>
              <TouchableOpacity>
                <Text style={styles.shop}>Shop Now</Text>
              </TouchableOpacity>
            </ImageBackground>

          </View>

          <View style={{ margin: 10 }}>
            <ImageBackground
              source={require('../assests/4.jpg')} borderRadius={15} style={{ height: 160, width: 160, padding:15 }}>
              <Text style={styles.txt1}>Last minutes-college needs</Text>
              <TouchableOpacity>
                <Text style={styles.shop}>Shop Now</Text>
              </TouchableOpacity>
            </ImageBackground>

          </View>
          </View>
            <View style={{margin:10}}>
          <ImageBackground
              source={require('../assests/kitchen.webp')} borderRadius={15} style={{ height: 330, width: 160, padding:15}}>
              <Text style={styles.txt1}>Campus cooking & dining</Text>
              <TouchableOpacity>
                <Text style={styles.shop}>Shop Now</Text>
              </TouchableOpacity>
              <View style={{justifyContent:'flex-end',paddingTop:160}}>
                 <Text style={{color:'black',fontSize:10}}>From</Text>
                <Text style={{color:'black', fontSize:20,fontWeight:'bold'}}>50$</Text>
              </View>
              </ImageBackground>
              </View>
          </View>
          <View style={{flex:1,flexDirection:'row',backgroundColor:'lightblue',borderRadius:10,margin:5}}>
            <View style={{backgroundColor:'orange',padding:30,borderBottomRightRadius:80,height:150, width:280,borderTopRightRadius:80,borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
              <Text style={{fontSize:18,padding:2,color:'black'}}>Members get free shipping</Text>
              <Text style={{fontSize:18, padding:2,color:'black'}}>With no order minimum</Text>
              <Text style={{fontSize:12 ,color:'black',padding:2}}>Terms apply</Text>
              <TouchableOpacity>
              <Text style={{color:'black',padding:2, textDecorationLine:'underline'}}>Join Walmart+</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{color:'#0071dc',fontSize:26,fontWeight:'bold',paddingTop:10}}>try</Text>
              <Text style={{color:'#0071dc',fontSize:26,fontWeight:'bold',paddingHorizontal:10}}>it for</Text>
              <Text style={{color:'#0071dc',fontSize:26,fontWeight:'bold'}}>free</Text>
              <Text style={{color:'#0071dc',fontSize:16}}>Walmart+</Text>
              </View>
          </View>
          <View style={{margin:15}}>
          <ImageBackground
              source={require('../assests/kitc.webp')} borderRadius={15} style={{ height: 180, width: 320, padding:20 }}>
              <Text style={{color:'black',fontSize:26,fontWeight:'bold'}}>Oraganize it,</Text>
              <Text style={{color:'black',fontSize:26,fontWeight:'bold'}}>under $25</Text>
              <TouchableOpacity>
                <Text style={styles.shop}>Shop Now</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={{margin:15}}>
          <ImageBackground
              source={require('../assests/fur.webp')} borderRadius={15} style={{ height: 180, width: 320, padding:20 }}>
              <Text style={{color:'black',fontSize:26,fontWeight:'bold'}}>Own your style</Text>
              <TouchableOpacity>
                <Text style={styles.shop}>Shop furniture</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={{flexDirection:'row'}}>
          <View style={{margin:15}}>
          <ImageBackground
              source={require('../assests/fall.webp')} borderRadius={15} style={{ height: 330, width: 160, padding:15}}>
              <Text style={styles.txt1} >All in for fall</Text>
              <TouchableOpacity>
                <Text style={styles.shop}>Shop decor</Text>
              </TouchableOpacity>
              <View style={{justifyContent:'flex-end',paddingTop:160}}>
                 <Text style={{color:'black',fontSize:10}}>From</Text>
                <Text style={{color:'black', fontSize:20,fontWeight:'bold'}}>25$</Text>
              </View>
              </ImageBackground>
          </View>
          <View style={{flexDirection:'column'}}>
          <View style={{ margin: 10 }}>
            <ImageBackground
              source={require('../assests/refresh.webp')} borderRadius={15} style={{ height: 160, width: 160, padding:15 }}>
              <Text style={styles.txt1}>Refresh your routine</Text>
              <TouchableOpacity>
                <Text style={{fontSize:15,color:'black',textDecorationLine:'underline',paddingTop:30}}>Shop Now</Text>
              </TouchableOpacity>
            </ImageBackground>

          </View>
          <View style={{margin:10}}>
          <ImageBackground
              source={require('../assests/weekly.jpg')} borderRadius={15} style={{ height: 160, width: 160, padding:15 }}>
              <Text style={styles.txt1}>Last minutes-college needs</Text>
              <TouchableOpacity>
                <Text style={styles.shop}>Shop Now</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          
          </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View>
          <Text style={{color:'black',fontWeight:'bold',fontSize:16,paddingHorizontal:10}}>Weekly deals</Text>
          <Text style={{padding:10}}>Up to 65% off</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:180, color:'black',textDecorationLine:'underline'}}>View all</Text>
          </View>
          </View>
          <VerticalBar/>
          <View style={styles.divider}/>
          <View style={{ margin: 15 }}>
            <ImageBackground
              source={require('../assests/glow.webp')} borderRadius={15} style={{ height: 180, width: 320, borderRadius: 0 }}>
              <View style={{paddingTop:25}}>
              <Text style={styles.imgtxt2}>Beauty</Text>
              <Text style={styles.imgtxt2}>Savings</Text>
              <TouchableOpacity>
                <Text style={styles.shop}>Shop Now</Text>
              </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={{flexDirection:'row'}}>
            <View>
          <Text style={{color:'black',fontWeight:'bold',fontSize:16,paddingHorizontal:10}}>Glow-up Event</Text>
          <Text style={{padding:10}}>Now through 9/30.</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:160, color:'black',textDecorationLine:'underline'}}>View all</Text>
          </View>
          </View>
          <GlowUp/>
        </ScrollView>
      </>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0071dc',
    marginBottom:10,
    paddingTop:10,
    
  },
  imglogo:{
    height: 35,
    width:30,
    backgroundColor:'#0071dc',
    paddingLeft:15
  
  },
  position:{
    flexDirection:'row'
  },
  verticalLine: {
    width: 1,
    marginLeft:3,
    Top:6,
    height: 20,
    backgroundColor: 'white',
  },
  txt:{
    fontWeight:'bold',
    color:'white', 
    paddingTop:6,
    paddingHorizontal:5
  },
  cart:{
    marginLeft: 10
  },
  imgtxt:{
    fontSize:16,
    color:'black',
    padding:10
  },
  imgtxt2:{
    fontSize:24,
    color:'black', 
    paddingHorizontal:10,
  },
  shop:{textDecorationLine:'underline',
  color:'black',
  paddingTop:10,
  paddingHorizontal:10,
  fontSize:15
  },
  overlay:{
    left: 10,
    right: 0,
    bottom: 350,
    marginRight:15,
    // Semi-transparent overlay
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  txt1:{color:'black', fontSize:14, fontWeight:'bold'},
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
    marginVertical: 10,
  },
})