import React from 'react';
import {useState, useEffect} from 'react';
import {Text, View,TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from "@react-native-picker/picker";


const Homescreen =() =>{  
  
  const Book = () => Alert.alert("navigate");
  const [title, setTitle] = React.useState('');
  const Add = async () => {
      try {
          AsyncStorage.setItem('Title', title);
      } catch (error) {
          console.log(error);
      }

      try {
          AsyncStorage.setItem('Author', author);
      } catch (error) {
          console.log(error);
      }

      try {
          AsyncStorage.setItem('Pages', pages);
      } catch (error) {
          console.log(error);
      }

      try {
          AsyncStorage.setItem('Genre', genre);
      } catch (error) {
          console.log(error);
      }

  };


    const getTitle = async () => {
     try {
        const title = await AsyncStorage.getItem('Title');
        setTitle(title);
     } catch (error) {}
};
    React.useEffect(() => {
    getTitle();
}, []);


   const getAuthor = async () => {
     try {
        const author = await AsyncStorage.getItem('Author');
        setAuthor(author);
    } catch (error) {}
};
    React.useEffect(() => {
    getAuthor();
}, []);


   const getPages = async () => {
    try {
        const pages = await AsyncStorage.getItem('Pages');
        setPages(pages);
    } catch (error) {}
};
   React.useEffect(() => {
    getPages();
}, []);

   const getGenre = async () => {
    try {
        const genre = await AsyncStorage.getItem('Genre');
        setGenre(genre);
    } catch (error) {}
};
  React.useEffect(() => {
    getGenre();
}, []);


     const [author, setAuthor] = React.useState('');
     const [pages, setPages] = React.useState('');
     const [genre, setGenre] = React.useState();

  return(

    <View style ={{ height:'100%',  backgroundColor: 'white',justifyContent:'center', alignItems:'center', 
    }}>
        <Text style={styles.AppTitle}>Bookkeeper</Text>
        <Text style={styles.Welcome}>Welcome back Thobeka</Text> 
        <Text style={styles.Last}>Last book read</Text> 
        <Text style={styles.Title}>{title}</Text> 
        <Text style={styles.Author}>{author}</Text> 
        <Text style={styles.Num}>{pages}</Text>
        <Text style={styles.Genre}>{genre}</Text>  
        <Text style={styles.Total}>Total number of pages read:{pages}</Text> 
        <Text style={styles.Ave}>Average pages read: {pages/1}</Text>
          
        <Text style={styles.AddBook}>Add a book</Text>  
        <Text style={styles.Details}>Please fill in the following details:</Text> 
        <TextInput style={styles.Input} placeholder="Title" onChangeText={value => setTitle(value)}/>
        <TextInput style={styles.Input2} placeholder="Author" onChangeText={value => setAuthor(value)}/>
        <TextInput style={styles.Input3} placeholder="Pages" onChangeText={value => setPages(value)}/>
        <View style={styles.container}>

   <Picker style={styles.picker} selectedValue={genre} onValueChange={value => setGenre(value)}>
       <Picker.Item label="Action" value="Action" />
       <Picker.Item label="Horror" value="Horror" />
       <Picker.Item label="Science fiction" value="Science fiction" />
       <Picker.Item label="Romance" value="Romance" />
       <Picker.Item label="Drama" value="Drama" />
       <Picker.Item label="Mystery" value="Mystery" />
    
   </Picker>
</View>

       <TouchableOpacity style={styles.addButton} onPress={Add}>
        <Text style={styles.buttonText}>Add Book To Collection</Text> 
       </TouchableOpacity>

   </View>

    );
};


const styles = StyleSheet.create({
    
      AppTitle:{
        fontSize:40,
        textAlign:'center',
        color:'#800080',
        position:'absolute',
        bottom:880,
      },
      Welcome:{
        fontSize:35,
        textAlign:'center',
        position:'absolute',
        bottom:840,
        color:'black',
      },
      Last:{
        fontSize:25,
        textAlign:'center',
        position:'absolute',
        bottom:800,
        color:'black',

      },
      Title:{
        fontSize:25,
        textAlign:'left',
        position:'absolute',
        bottom:760,
        left:270,
        color:'black',
      },
      Author:{
        fontSize:25,
        textAlign:'left',
        position:'absolute',
        bottom:720,
        left:270,
        color:'black',
      },
      Genre:{
        fontSize:25,
        textAlign:'left',
        position:'absolute',
        bottom:680,
        left:270,
        color:'black',
      },
      Num:{
        fontSize:25,
        textAlign:'left',
        position:'absolute',
        bottom:640,
        left:270,
        color:'black',
      },
      Total:{
        fontSize:25,
        textAlign:'center',
        position:'absolute',
        bottom:590,
        color:'black',
      },
      Ave:{
        fontSize:25,
        textAlign:'center',
        position:'absolute',
        bottom:550,
        color:'black',
      },
    addButton:{
        backgroundColor:'#800080',
        borderRadius:10,
        paddingVertical:15,
        paddingHorizontal:30,
        marginTop:22,
        position:'absolute',
        bottom:80,
      },
      buttonText:{
        color:'#000000',
        fontSize:20,
      },
      AddBook:{
        fontSize:30,
        textAlign:'center',
        position:'absolute',
        bottom:460,
        color:'black',
      },
      Details:{
        fontSize:30,
        textAlign:'center',
        position:'absolute',
        bottom:400,
        color:'black',
      },
      Input:{
        textAlign:'center',
        position:'absolute',
        bottom:340,
        color:'black',
        fontWeight:'bold',
        borderWidth:1,
        padding:10,
        paddingHorizontal:50,
        backgroundColor:'white',
        borderColor:'black',
        fontSize:17,
      },
      Input2:{
        textAlign:'center',
        position:'absolute',
        bottom:280,
        color:'black',
        fontWeight:'bold',
        borderWidth:1,
        padding:10,
        paddingHorizontal:50,
       
        backgroundColor:'white',
        borderColor:'black',
        fontSize:17,
      },
      Input3:{
        textAlign:'center',
        position:'absolute',
        bottom:220,
        color:'black',
        fontWeight:'bold',
        borderWidth:1,
        padding:10,
        paddingHorizontal:50,
        fontSize:17,
        backgroundColor:'white',
        borderColor:'black',
      },
      picker:{
        textAlign:'center',
        backgroundColor:'white',
        fontSize:17,
        padding:10,
        paddingHorizontal:50,
        paddingVertical:20,
        borderWidth:20,
        color:'black',
        position:'absolute',
        top:260,
        alignItems:'center',
        
      },
    });
export default Homescreen;