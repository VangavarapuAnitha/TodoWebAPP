import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reduxfeatures/store";
import { todo, updateTaskStatus } from "../reduxfeatures/todoSlice";
import { TaskStatus } from "../reduxfeatures/todoSlice";
import "../styles/AllTodos.css";
const AllTodos: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [selectedStatuses, setSelectedStatuses] = useState<{
    [key: string]: TaskStatus;
  }>({});
  const handleDropdownChange = (id: string, newStatus: TaskStatus) => {
    setSelectedStatuses((prev) => ({
      ...prev,
      [id]: newStatus,
    }));
  };

  const handleStatusUpdate = (id: string) => {
    if (selectedStatuses[id] !== undefined) {
      dispatch(updateTaskStatus({ id, taskStatus: selectedStatuses[id] }));
    }
  };

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
          <th>Current Status</th>
          <th>Task Added On</th>
          <th>Update TaskStatus</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((t: todo) => (
          <tr key={t.id}>
            <td>{t.task}</td>
            <td>{t.assignedTo}</td>
            <td>{getTextStatus(t.taskState)}</td>
            <td>{t.taskAddedOn}</td>
            <td className="status-select">
              {/* Dropdown for status selection */}
              <select
                value={selectedStatuses[t.id] ?? t.taskState}
                onChange={(e) =>
                  handleDropdownChange(
                    t.id,
                    Number(e.target.value) as TaskStatus
                  )
                }
              >
                {Object.values(TaskStatus)
                  .filter((value) => Number.isInteger(value)) // Ensure only numeric values are included
                  .map((status) => (
                    <option key={status} value={status}>
                      {TaskStatus[status as TaskStatus]}{" "}
                      {/* Correct type assertion */}
                    </option>
                  ))}
              </select>
              <button onClick={() => handleStatusUpdate(t.id)} className="update-btn">Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllTodos;
