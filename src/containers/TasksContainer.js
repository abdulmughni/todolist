import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TasksComponent from "../components/contentArea/Tasks";
import {
  getTasksList,
  getTaskDetail,
  postTask,
  updateTask,
  deleteTask,
} from "../store/actions";

const mapStateToProps = (state) => {
  return {
    tasksListRes: state.tasksReducer.tasksListRes,
    taskDetailRes: state.tasksReducer.taskDetailRes,
    taskUpdateRes: state.tasksReducer.taskUpdateRes,
    taskPostRes: state.tasksReducer.taskPostRes,
    taskDeleteRes: state.tasksReducer.taskDeleteRes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTasksList: bindActionCreators(getTasksList, dispatch),
    onGetTaskDetail: bindActionCreators(getTaskDetail, dispatch),
    onUpdateTask: bindActionCreators(updateTask, dispatch),
    onPostTask: bindActionCreators(postTask, dispatch),
    onDeleteTask: bindActionCreators(deleteTask, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksComponent);
