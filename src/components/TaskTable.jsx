import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({ tasksItems, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasksItems
      .filter((task) => task.done === doneValue)
      .map((task, id) => <TaskRow key={id} task={task} toggleTask={toggleTask} />);
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};

export default TaskTable;
