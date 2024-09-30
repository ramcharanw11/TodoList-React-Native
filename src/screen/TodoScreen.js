import { StyleSheet, Text, View, TextInput, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
const dummyData = [{
  id: '01',
  title: 'wash car'
}, {
  id: '01',
  title: 'wash car noooo'
}
]
const TodoScreen = () => {
  const renderTodos = ({item , index})=>{
    return (
      <View style={{backgroundColor:'grey',borderRadius:6,
        paddingVertical:12,
        marginBottom:12,
      }}>
        <Text style={{color:'black',fontSize:20,fontWeight:'800'}}>{item.title}</Text>
      </View>
    )
  }
  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput style={{
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical: 10,
      }} placeholder='Add a task'>
      </TextInput>
      <TouchableOpacity style={{
        backgroundColor: 'black',
        borderRadius: 6,
        paddingVertical: 5,
        marginVertical: 30,
        alignItems: 'center',
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '20' }} >Add</Text>
      </TouchableOpacity>
      {/* Render todo list */}
      <FlatList data={dummyData} renderItem={renderTodos}></FlatList>
    </View>
  )
}
export default TodoScreen
const styles = StyleSheet.create({})