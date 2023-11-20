import { createSlice } from '@reduxjs/toolkit'
import { TodoItem } from "../../model/TodoItem";

export const todoSlice = createSlice({
  name: "TodoSlice",
  initialState: {
    data: [],
  },
  reducers: {
    getTodos: (state: { data: TodoItem[] }) => {
      state.data = [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false
        },
        {
          userId: 2,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false
        },
        {
          userId: 3,
          id: 3,
          title: "fugiat veniam minus",
          completed: false
        },
        {
          userId: 4,
          id: 4,
          title: "et porro tempora",
          completed: true
        },
      ]
    }
  }
})

export const { getTodos } = todoSlice.actions;
export default todoSlice.reducer;
