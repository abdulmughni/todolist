import React, { useState, useEffect, useRef, Fragment } from "react";
import TaskItem from "./TaskItem";
import CreateTaskModal from "./CreateTaskModal";
import Pagination from "./Pagination";
import Empty from "./Empty";

const Tasks = ({
  onGetTasksList,
  tasksListRes,
  onUpdateTask,
  onPostTask,
  onDeleteTask,
}) => {
  const pageItemsLimit = 10;

  // Create useRef for save previous indexes
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskNameError, setTaskNameError] = useState(false);
  const [tasksList, setTasksList] = useState([]);
  const [tasksOriginalList, setTasksOriginalList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editTask, setEditTask] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(10);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [searchTask, setSearchTask] = useState("");
  const [formLoader, setFormLoader] = useState(false);

  useEffect(() => {
    onGetTasksList(10, currentPage === 1 ? "" : currentPage);
  }, [onGetTasksList]);

  useEffect(() => {
    if (tasksListRes) {
      setTasksList(tasksListRes.data);
      setTasksOriginalList(tasksListRes.data);
      setTotalCount(tasksListRes.count);
    }
  }, [tasksListRes]);

  useEffect(() => {
    onGetTasksList(10, currentPage === 1 ? "" : currentPage);
  }, [currentPage]);

  const onShowModal = () => {
    setShowModal(true);
  };

  // Close Task Modal and Clean States
  const onCloseModal = () => {
    setShowModal(false);
    setTaskName("");
    setTaskNameError(false);
    setSelectedTask(null);
    setEditTask(false);
  };

  const onChangeTask = (e) => {
    const value = e.target.value;
    setTaskName(value);

    if (value && value.length > 0) {
      setTaskNameError(false);
    }
  };

  // Task Modal Save Button Function
  const onCreateTask = async () => {
    if (taskName.length === 0) {
      setTaskNameError(true);
    }

    if (taskName && taskName.length > 0) {
      setFormLoader(true);
      if (editTask) {
        await onUpdatingTask();
      } else {
        await onCreatingTask();
      }

      setFormLoader(false);
      setTaskName("");
      onCloseModal();
    }
  };

  // On Click Edit Task
  const onEditDescription = (item) => {
    setSelectedTask(item);
    setTaskName(item.description);
    setEditTask(true);
    setShowModal(true);
  };

  // Updating Task
  const onUpdatingTask = async () => {
    const obj = {
      description: taskName,
    };
    const result = await onUpdateTask(selectedTask._id, obj);

    if (result && result.payload && result.payload.success) {
      onGetTasksList();
    }
  };

  // Creating Task
  const onCreatingTask = async () => {
    const obj = {
      description: taskName,
    };
    const result = await onPostTask(obj);

    if (result && result.payload && result.payload.success) {
      onGetTasksList();
    }
  };

  // Pagination Page Change
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Goto previous page with pagination
  const onPrevClick = () => {
    if ((currentPage - 1) % pageItemsLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageItemsLimit);
      setMinPageLimit(minPageLimit - pageItemsLimit);
    }
    setCurrentPage((prev) => prev - 1);
  };

  // Goto next page with pagination
  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageItemsLimit);
      setMinPageLimit(minPageLimit + pageItemsLimit);
    }
    setCurrentPage((prev) => prev + 1);
  };

  // Search Task with description
  const onSearchTask = (e) => {
    const value = e.target.value;
    const tasksListArr = [...tasksOriginalList];

    setSearchTask(value);
    if (tasksListArr && tasksListArr.length > 0) {
      // Filter task with lowercase and return list
      const tasksArr = tasksListArr.filter((data) => {
        const desc = data.description.toLowerCase();
        const searchDesc = value.toLowerCase();

        return desc.includes(searchDesc);
      });

      setTasksList(tasksArr);
    }
  };

  // Handle task drag start
  const handleDragStart = (position) => {
    draggingItem.current = position;
  };

  // handle drag enter item
  const handleDragEnter = (position) => {
    dragOverItem.current = position;
    const tasksArr = [...tasksList];

    // get the drag item object data
    const dragItemObj = tasksArr[draggingItem.current];

    // with slice remove drag item
    tasksArr.splice(draggingItem.current, 1);

    // push drag item to drop item position
    tasksArr.splice(dragOverItem.current, 0, dragItemObj);

    // equal drag and drop indexes
    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;

    setTasksList(tasksArr);
  };

  // Pagination Filter with Slice
  let tasksSkipList = [];
  // find how many skip
  const findSkip = currentPage === 1 ? 0 : `${currentPage - 1}0`;
  // start and end indexes
  const startIndex = parseInt(findSkip);
  const endIndex = currentPage === 1 ? 10 : startIndex + 10;

  // with slice filter for pagination
  tasksSkipList = tasksList.slice(startIndex, endIndex);

  return (
    <Fragment>
      {tasksOriginalList && tasksOriginalList.length > 0 ? (
        <div className="container">
          <div className="tasks-box mx-auto py-10">
            <div className="flex">
              <div className="w-1/2">
                <input
                  value={searchTask}
                  placeholder="Search Task...."
                  className="bg-white rounded-md p-3 border border-grey-500 shadow-sm w-72 mb-4 outline-none focus:shadow-md"
                  onChange={onSearchTask}
                />
              </div>
              <div className="w-1/2 text-right">
                <button
                  className="transition ease-in-out p-3 border-0 bg-blue-700 text-white rounded-md w-44 mb-4 hover:bg-blue-900"
                  onClick={onShowModal}
                >
                  Add New
                </button>
              </div>
            </div>

            {tasksSkipList &&
              tasksSkipList.length > 0 &&
              tasksSkipList.map((item, index) => {
                return (
                  <TaskItem
                    index={index}
                    key={index}
                    item={item}
                    onEditDescription={onEditDescription}
                    onUpdateTask={onUpdateTask}
                    onGetTasksList={onGetTasksList}
                    onDeleteTask={onDeleteTask}
                    handleDragStart={handleDragStart}
                    handleDragEnter={handleDragEnter}
                  />
                );
              })}

            {totalCount > 10 && (
              <Pagination
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                currentPage={currentPage}
                maxPageLimit={maxPageLimit}
                minPageLimit={minPageLimit}
                onPageChange={onPageChange}
                totalCount={totalCount}
              />
            )}
          </div>
        </div>
      ) : (
        <Empty setShowModal={setShowModal} />
      )}

      {/**  Task Create and Edit Modal **/}
      <CreateTaskModal
        showModal={showModal}
        onChangeTask={onChangeTask}
        taskNameError={taskNameError}
        taskName={taskName}
        onCreateTask={onCreateTask}
        onCloseModal={onCloseModal}
        formLoader={formLoader}
      />
    </Fragment>
  );
};

export default Tasks;
