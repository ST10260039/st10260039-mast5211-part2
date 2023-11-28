import React from 'react';
import {useState, useEffect} from 'react';
import {Text, View,TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from '@react-navigation/native';


const Homescreen:React.FC = () => {
  const navigation=useNavigation();
  const navigateToHistoryscreen = () =>{
    
    navigation.navigate('Historyscreen', {data: title});
    navigation.navigate('Historyscreen', {data: author});
    navigation.navigate('Historyscreen', {data: genre});  
    navigation.navigate('Historyscreen', {data: pages});      
  }
    
 

  const [title, setTitle] = useState('') //Input for title
  const [author, setAuthor] = useState('') //Input for author
  const [genre, setGenre] = useState('') //Input for genre
  const [pages, setPages] = useState('') //Input for pages
  const [books, setBooks] = useState<BookItem[]>([]); //All componenets will be wrapped
  //new line variable
  //
  const [lastBook, setLastBook] = useState(null);
 

  //new
  //Load the last expense from AsyncStorage on the app load
  useEffect(() => {
    loadLastBook();
  }, []);

  const loadLastBook = async () => {
    try {
      const lastBookJSON = await AsyncStorage.getItem('lastBook');
      if (lastBook) {
        const lastBookData = JSON.parse(lastBookJSON);
        setLastBook(lastBookData);
      }
    } catch (error) {
      console.error('Error loading last Book:', error);
    }
  };


  interface BookItem { //ensures that we can pass through props in this defined interface
  title: string;
  author: string;
  genre: string;

   pages: number;
}

//function to add a new Book to the list
const addBook = () =>{
  if (title && author && genre  &&pages) {
    const newBook = {
      title,
      author,
      genre,
    
      pages : parseFloat(pages), // parsefloat allows accepts a string & converst to a number
    };

    setBooks([...books, newBook]); //... spread syntax, allows an expression to be expanded where multiple arrays, variables or function that are expected
    //sav ethe last expense to async storage
    saveLastBook(newBook);
    setTitle('');
    setAuthor('');
    setGenre('');
    setPages('');


  }
};

const saveLastBook = async(book) =>{
  try {
    await AsyncStorage.setItem('last book', JSON.stringify(book));
  } catch (error) {
    console.error('Error saving last book', error);
  }
}; 


//function to render each description item in the flatlist


const renderBookItem = ({ item }: { item: { title:string; author:string; genre:string; pages: number} }) =>(
  <View style={styles.BookItem}>
    <Text style={styles.description}>{item.title}</Text>
    <Text style={styles.description}>{item.author}</Text>
    <Text style={styles.description}>{item.genre}</Text>
    <Text style={styles.description}>R{item.pages}</Text>
  </View>
);

 //calc the total pages using the reduce function
 //reduce function accumulates the items and returns into a single value
 const totalPages = books.reduce((total , book) => total +book.pages, 0); 

 //calc the average pages
 //=== will check if the operands are equal, checks for the value and type
 const averagepages= books.length === 0? 0: totalPages / books.length;


 //render the ui components
return ( 
  <ScrollView style={styles.container}>
  <Text style={styles.title}>Book Keeper</Text>
  <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle}/>
  <TextInput style={styles.input} placeholder="Author" value={author} onChangeText={setAuthor}/>
  <TextInput style={styles.input} placeholder="Genre" value={genre} onChangeText={setGenre}/>
  <TextInput style={styles.input} placeholder="Pages read" value={pages} onChangeText={setPages} keyboardType="numeric" />
  <TouchableOpacity style={styles.addButton} onPress={addBook}>
    <Text style={styles.buttonText}>Add Book to collection</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.addButton} onPress={navigateToHistoryscreen}>
    <Text style={styles.buttonText}>Send Details to History</Text>
  </TouchableOpacity>
  
  <Text style={styles.totalText}>Total Pages read: R{totalPages.toFixed(2)}</Text>
  <Text style={styles.totalText}>Average Pages read: R{averagepages.toFixed(2)}</Text>
  {lastBook && (
    <View style={styles.lastBook}> 
    <Text style={styles.lastBookText}>Last Expense:</Text>
    <Text style={styles.lastBookDescription}>{lastBook.title}</Text>
    <Text style={styles.lastBookDescription}>{lastBook.author}</Text>
    <Text style={styles.lastBookDescription}>{lastBook.genre}</Text>
    <Text style={styles.lastBookDescription}>R{lastBook.pages.toFixed(2)}</Text>
    </View>
  )}
  <FlatList 
  data={books}
  keyExtractor={(_, index) => index.toString()}
  renderItem={renderBookItem}
  />
  </ScrollView>
);
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    padding:20,
  },
   title:{
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20,
    color:'black',
    textAlign:'center',
  },
  description:{
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20,
    color:'black',
    textAlign:'center',
  },
  input:{
    backgroundColor:'white',
    borderRadius:8,
    marginBottom:10,
    fontSize:16,
  
  },
  addButton:{
    backgroundColor:'green',
    borderRadius:8,
    paddingVertical:12,
    paddingHorizontal:20,
    marginTop:10,
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
  },
  totalText:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:20,
  },
  BookItem:{
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor:'white',
    borderRadius:8,
    padding:10,
    marginBottom:10,
  },
  BookDescription:{
    fontSize:24,
    fontWeight: 'bold',
    flex:1,
  },
  
  lastBook:{
    backgroundColor:'white',
    borderRadius:8,
    padding:10,
    marginTop:20,
  },
  lastBookText:{
    fontSize:18,
    fontWeight:'bold',
  },
 
  lastBookDescription:{
    fontSize:18,
    fontWeight:'bold',
  },
});

export default Homescreen;
