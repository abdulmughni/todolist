import { connect } from "react-redux";
import MainRoutesComponent from "../components";

const mapStateToProps = (state) => {
  return {
    loginRes: state.userReducer.loginRes,
  };
};

export default connect(mapStateToProps, null)(MainRoutesComponent);
