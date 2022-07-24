import React from "react";
import { formSpinLoader } from "../../common/svgIcons";

const CreateTaskModal = ({
  showModal,
  onChangeTask,
  taskNameError,
  taskName,
  onCreateTask,
  onCloseModal,
  formLoader,
}) => {
  return (
    <div
      className={`relative z-10 ${
        showModal ? "block opacity-100" : "hidden opacity-0"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="bg-white p-4 mb-4">
              <h3 className="mb-4">Create New Task</h3>
              <input
                type="text"
                name="task-name"
                id="task-name"
                value={taskName}
                className={`bg-white rounded-md p-3 border border-grey-500 shadow-sm w-full outline-none ${
                  taskNameError ? "border-red-600" : ""
                } focus:shadow-md`}
                placeholder="Type..."
                onChange={(e) => onChangeTask(e)}
              />
              {taskNameError && (
                <small className=" text-red-600">This field is required!</small>
              )}
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full flex items-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onCreateTask}
              >
                {formLoader && formSpinLoader} Save
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
