import React from "react";

const VisibilityControl = ({ setShowCompleted, showCompleted, clearTasks }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      clearTasks();
      setShowCompleted(false);
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          onChange={(e) => setShowCompleted((showCompleted) => !showCompleted)}
          checked={showCompleted}
          className="form-check-input"
        />
      </div>
      <label> Show Tasks Done</label>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Clear
      </button>
    </div>
  );
};

export default VisibilityControl;
