import React, { useState} from "react";
import {useDispatch} from "react-redux"
import {addTodo} from '../reduxfeatures/todoSlice'

const Home:React.FC=()=>{

const [task,setTask]=useState<string>('');
const [assignTo,setAssignTo]=useState<string>('');

 const dispatch = useDispatch()
const handleAdd=(e: React.FormEvent)=>{
e.preventDefault();
if(task.trim()=== "" || assignTo.trim()=== "") return;
dispatch(addTodo({task,assignedTo:assignTo}));
setTask('')
setAssignTo('')
};
  return(
    <div>
    
    <h5>Add Todo</h5>
    <form onSubmit={handleAdd}>
      <>
      <label>task:</label>
      <input
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      required
          />
      </>
      <>
      <label>Assign To</label>
      <input
      value={assignTo}
      onChange={(e)=>setAssignTo(e.target.value)}
      required
      />
      </>
      <button type="submit">Add</button>
    </form>
    </div>
  );
}

export default Home;
