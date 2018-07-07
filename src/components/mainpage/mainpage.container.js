
import { connect } from 'react-redux'
import { doLogout, clearMenu, addMenuItem, getTimeDim, getOrgUnitsDim } from '../../state/actions'
import MainPage from '../mainpage/mainpage'




const mapStateToProps = state => {
  return {
    menuList: state.mainMenu.menuList,   
    timeTree: state.trees.time,
    timeSelected: state.trees.seltime,
    orgUnitsTree: state.trees.orgunits,
    orgUnitsSelected: state.trees.selorgunits,
    userName: state.auth.name
  }
}


const mapDispatchToProps =  {
    clearMenu,
    addMenuItem,
    doLogout,
    getTimeDim,
    getOrgUnitsDim,
}



export default connect(
  mapStateToProps,
  mapDispatchToProps, null,  { pure: false }
)(MainPage)





