import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface TodoProps {
    title: string;
    desc: string
    status: boolean
}

const initialState: { todos: TodoProps[] } = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (state, action: PayloadAction<TodoProps>) => {
            state.todos = [...state.todos, action.payload]
        }
    }
})

export const { createTodo } = todoSlice.actions;
export default todoSlice.reducer