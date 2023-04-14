import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (newTask) => {
    if (!!!tasksItems.find((el) => el.name === newTask)) {
      setTasksItems((listTask) => {
        return [...listTask, { name: newTask, done: false }];
      });
    }
  };

  const toggleTask = async (taskName) => {
    await setTasksItems((listTask) => {
      return listTask.map((task) =>
        task.name === taskName ? { ...task, done: !task.done } : task
      );
    });
  };

  const clearTasks = () => {
    setTasksItems((task) => {
      return task.filter((task) => !task.done);
    });
  };

  useEffect(() => {
    setTasksItems(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  useEffect(() => {
    if (tasksItems.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasksItems));
    }
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container p-4 col-md-4 offset-md-4">
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasksItems={tasksItems} toggleTask={toggleTask} />

        <VisibilityControl
          setShowCompleted={setShowCompleted}
          showCompleted={showCompleted}
          clearTasks={clearTasks}
        />

        {showCompleted && (
          <TaskTable
            tasksItems={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </main>
  );
}

export default App;
