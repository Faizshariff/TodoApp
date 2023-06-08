import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'native-base';
import { toggleTodo, removeTodo } from '../features/todos/todosSlice';
import Complete from '../assets/images/Complete.png';
import Incomplete from '../assets/images/Incomplete.png';
import Cross from '../assets/images/cross.png';

export function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (!todos.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Current tasks</Text>
      </View>
    );
  }

  function TaskDelete(id) {
    dispatch(removeTodo(id));
  }

  function TaskComplete(todo) {
    dispatch(toggleTodo(todo));
  }

  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <View style={styles.innercontainer} key={todo.id}>
          <Button
            style={{
              marginRight: 10,
              backgroundColor: 'transparent',
            }}
            onPress={() => TaskComplete(todo.id)}
          >
            {todo.completed ? (
              <Image style={styles.ImgDimension} source={Complete} />
            ) : (
              <Image style={styles.ImgDimension} source={Incomplete} />
            )}
          </Button>

          <Text style={styles.todoText}>{todo.text}</Text>
          <Button
            style={{
              backgroundColor: 'transparent',
            }}
            onPress={() => TaskDelete(todo.id)}
          >
            <Image style={styles.image} source={Cross} />
          </Button>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {
    backgroundColor: '#F9F9FB',
    margin: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
  },
  image: {
    height: 50,
    width: 50,
  },
  ImgDimension: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoText: {
    margin: 5,
    marginBottom: 5,
    marginTop: 5,
    width: '55%',
  },
});
