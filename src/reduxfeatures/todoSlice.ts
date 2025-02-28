import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export enum TaskStatus{
  notStarted=0,
  inProgress=1,
  completed=2,
  closed=3

}
export interface todo {
  id: string;
  task: string;
  assignedTo: string;
  taskState: number;
}
interface todoState {
  todos: todo[];
}

const initialState: todoState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{
        task: string;
        assignedTo: string;
        
      }>
    ) => {
      const todo: todo = {
        id: uuidv4(),
        task: action.payload.task,
        assignedTo: action.payload.assignedTo,
        taskState: TaskStatus.notStarted,
      };
      state.todos.push(todo);
    }
  },
});
export const {addTodo}= todoSlice.actions;
export default todoSlice.reducer
