import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Taskdetails from './src/components/Taskdetails';
import { NativeBaseProvider } from "native-base";
import { Provider } from 'react-redux';
import store from './src/store';
import { TodoApp } from './src/components/TodoApp';

const screenHeight = Dimensions.get('window').height;

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <View style={[styles.container, { height: screenHeight }]}>
          <Taskdetails />
          <TodoApp />
          <StatusBar style="auto" />
        </View>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginLeft: 5,
  },
});
