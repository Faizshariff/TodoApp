import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({ id: nextTodoId++, text: action.payload, completed: false })
    },
    removeallTodo(state) {
      if(state != null) {
        state.length = 0;
    }
    },
    removeTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload);
    },    
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { addTodo, removeallTodo , removeTodo , toggleTodo } = todosSlice.actions

export default todosSlice.reducer