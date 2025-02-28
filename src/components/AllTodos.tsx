import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reduxfeatures/store";
import { todo } from "../reduxfeatures/todoSlice";
import { TaskStatus } from "../reduxfeatures/todoSlice";
import "../styles/AllTodos.css"
const AllTodos: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const getTextStatus = (status: number): string => {
    switch (status) {
      case TaskStatus.notStarted:
        return "NotStarted";
      case TaskStatus.inProgress:
        return "InProgress";
      case TaskStatus.completed:
        return "Completed";
      case TaskStatus.closed:
        return "Closed";
      default:
        return "Unknown";
    }
  };
  return (
    <table className="todo-table">
      <thead>
          <tr>
        <th>Task</th>
        <th>Assigned To</th>
        <th>status</th>
        
        </tr>
      </thead>
      <tbody>
        {todos.map((t: todo) => (
          <tr key={t.id}>
            <td>{t.task}</td>
            <td>{t.assignedTo}</td>
            <td>{getTextStatus(t.taskState)}</td>
            <td><button>completed</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllTodos;
