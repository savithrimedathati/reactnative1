import React,{ useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header1 from './Components/Header1';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'An Application is Created', key: '1' },
    { text: 'Play the games', key: '2' },
    { text: 'Call all your friends to play', key: '1' }
  ])
  return (
    <View style={styles.container}>
      <Header1 />
      <View style={ styles.content }>
       <TodoList />
        <View style={ styles.list }>
          <FlatList 
          data={ todos }
          renderItem={({ item }) =>(
            <TodoItem item={ item} />
          ) }
          />
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    padding: 40
  },
  list: {
    marginTop: 20
  }
  
});


