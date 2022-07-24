import React, { useState } from "react";
import { spinLoader, spinDelLoader } from "../../common/svgIcons";

const TaskItem = ({
  index,
  item,
  onEditDescription,
  onUpdateTask,
  onGetTasksList,
  onDeleteTask,
  handleDragStart,
  handleDragEnter,
}) => {
  const [completeLoader, setCompleteLoader] = useState(false);
  const [delLoader, setDelLoader] = useState(false);

  // Task completing
  const onTaskCompleting = async (item) => {
    setCompleteLoader(true);
    const obj = {
      completed: !item.completed,
    };
    const result = await onUpdateTask(item._id, obj);

    if (result && result.payload && result.payload.success) {
      await onGetTasksList();
      setCompleteLoader(false);
    }
  };

  // On Task Delete
  const onDeletingTask = async (item) => {
    setDelLoader(true);
    const result = await onDeleteTask(item._id);

    if (result && result.payload && result.payload.success) {
      await onGetTasksList();
      setDelLoader(false);
    }
  };

  return (
    <div
      className={`flex items-center rounded-md p-4 border border-grey-500 shadow-lg mb-3 ${
        item.completed ? "bg-lime-100" : "bg-white"
      }`}
      onDragStart={() => handleDragStart(index)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => handleDragEnter(index)}
      draggable
    >
      <div className="w-3/4 flex items-center">
        {completeLoader ? (
          spinLoader
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 mr-2 cursor-pointer ${
              item.completed ? "text-green-600" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => onTaskCompleting(item)}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <h3 className="m-0 p-0 text-sm">{item.description}</h3>
      </div>

      <div className="w-1/4 flex items-center justify-end">
        {completeLoader ? (
          spinLoader
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 mr-2 cursor-pointer ${
              item.completed ? "text-green-600" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => onTaskCompleting(item)}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 cursor-pointer text-gray-300 hover:text-blue-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => onEditDescription(item)}
        >
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>

        {delLoader ? (
          spinDelLoader
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 cursor-pointer text-gray-300 hover:text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => onDeletingTask(item)}
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
