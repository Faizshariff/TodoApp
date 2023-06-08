import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Modal, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import verify from '../assets/images/verify.png';
import cancel from '../assets/images/cancel.png';
import add from '../assets/images/add.png';
import { Button } from 'native-base';

export const AddTodo = () => {
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setText('');
  };

  return (
    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.container}>
      <Button title="" style={styles.addButton}>
        <Image style={styles.addButtonIcon} source={add} />
      </Button>
      <Text>Add Task</Text>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Enter Task"
            value={text}
            onChangeText={setText}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.doneButton} onPress={handleSubmit}>
              <Image style={styles.buttonIcon} source={verify} />
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Image style={styles.buttonIcon} source={cancel} />
              <Text style={styles.buttonText2}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '90%',
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F9F9FB',
    gap: 10,
    paddingVertical: 10,
  },
  addButton: {
    backgroundColor: 'transparent',
  },
  addButtonIcon: {
    height: 25,
    width: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
    width: '100%',
  },
  doneButton: {
    flexDirection: 'row',
    backgroundColor: '#5FDB25',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    gap: 10,
    borderRadius: 10,
  },
  cancelButton: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    gap: 10,
    borderRadius: 10,
  },
  buttonIcon: {
    height: 25,
    width: 22,
  },
  buttonText: {
    color: 'white',
  },
  buttonText2: {
    color: 'red',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#F9F9FB',
    padding: 5,
    margin: 5,
    height: 60,
    width: '80%',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default AddTodo;
