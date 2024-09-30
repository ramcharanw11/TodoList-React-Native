import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState } from 'react';

const TodoScreen = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleAddTodo = () => {
    if (todo.trim()) {
      if (editingId) {
        setTodoList(todoList.map(item => (item.id === editingId ? { ...item, title: todo } : item)));
        setEditingId(null);
      } else {
        setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
      }
      setTodo('');
    }
  };

  const handleEditTodo = (id, currentTitle) => {
    setEditingId(id);
    setTodo(currentTitle);
  };

  const handleDeleteTodo = (id) => {
    Alert.alert('Delete Todo', 'Are you sure you want to delete this todo?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => {
          setTodoList(todoList.filter(item => item.id !== id));
        },
      },
    ]);
  };

  const renderTodos = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: 'grey',
          borderRadius: 6,
          paddingVertical: 12,
          marginBottom: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ color: 'black', fontSize: 20, fontWeight: '800' }}>
          {item.title}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity 
            style={{
              backgroundColor: 'blue', // Edit button color
              borderRadius: 5,
              padding: 8,
              marginRight: 5,
            }}
            onPress={() => handleEditTodo(item.id, item.title)}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{
              backgroundColor: 'red', // Delete button color
              borderRadius: 5,
              padding: 8,
            }}
            onPress={() => handleDeleteTodo(item.id)}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: 'grey',
          borderRadius: 6,
          paddingHorizontal: 16,
          paddingVertical: 10,
          marginLeft: 5,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={setTodo}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          borderRadius: 6,
          paddingVertical: 5,
          marginVertical: 30,
          alignItems: 'center',
          marginLeft: 5,
        }}
        onPress={handleAddTodo}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
          {editingId ? 'Update' : 'Add'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={todoList}
        renderItem={renderTodos}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
