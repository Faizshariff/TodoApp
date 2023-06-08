import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';
import { removeallTodo } from '../features/todos/todosSlice';
import Delete from '../assets/images/Delete.png';



export const TodoApp = () => {
  const dispatch = useDispatch();

  function handleRemoveAllTodos() {
    dispatch(removeallTodo());
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>TaskList</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={handleRemoveAllTodos}>
          <Image style={styles.deleteIcon} source={Delete} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TodoList />
      </ScrollView>
      <AddTodo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingLeft : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: 'transparent',
  },
  deleteIcon: {
    width: 16,
    height: 21,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8599',
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default TodoApp;
