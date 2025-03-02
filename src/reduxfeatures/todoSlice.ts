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
  taskAddedOn:string;
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
        taskAddedOn: new Date().toLocaleDateString()
      };
      state.todos.push(todo);
    },
 updateTaskStatus: (state,action:PayloadAction<{id:string,taskStatus:TaskStatus}>)=>{
const todo= state.todos.find((t)=>t.id===action.payload.id)
if(todo){
  todo.taskState=action.payload.taskStatus
}
    }
  },
});
export const {addTodo,updateTaskStatus}= todoSlice.actions;
export default todoSlice.reducer
