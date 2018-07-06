import React from 'react';
import { connect } from 'react-redux'
import { tryLoginOnStart } from '../../state/actions'
import LoginContainer from '../login/login.container'
import MainPageContainer from '../mainpage/mainpage.container'




const mapStateToProps = state => {
  return {
    loggedIn: (state.auth && state.auth.token && state.auth.token!==""),
  }
}


const mapDispatchToProps ={
    tryLoginOnStart
}



class Gateway extends React.Component {


  constructor(props, context) {
    super(props, context);

    props.tryLoginOnStart(); // try login from persistent storage
  }
  

  render(){
    return this.props.loggedIn ? <MainPageContainer /> : <LoginContainer />;
  }
}





export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gateway)


