import React from 'react';
import {Text, View} from 'react-native';
import { useRoute } from '@react-navigation/native';

const Historyscreen:React.FC = () => {
    const  route = useRoute();
    const receivedata:string = route.params?.data ||'default value if no data is passed';
   
    return(
        <View style ={{
            height:'100%',
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:'center',
        }}>
        <Text style={{fontSize:40, fontWeight:'bold', letterSpacing:5}}>History of books read</Text>
        <Text style={{fontSize:40, fontWeight:'bold', letterSpacing:5}}>Title : {title}</Text>\
        <Text style={{fontSize:40, fontWeight:'bold', letterSpacing:5}}>Genre : {genre}</Text>
        <Text style={{fontSize:40, fontWeight:'bold', letterSpacing:5}}>Author : {author}</Text>
        <Text style={{fontSize:40, fontWeight:'bold', letterSpacing:5}}>Total Pages read : {pages}</Text>
       
        </View>
    );
};
export default Historyscreen;
