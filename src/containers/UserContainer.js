import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserLoginComponent from "../components/contentArea/User/UserLogin";
import { userLogin } from "../store/actions";

const mapStateToProps = (state) => {
  return {
    loginRes: state.userReducer.loginRes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLogin: bindActionCreators(userLogin, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginComponent);
