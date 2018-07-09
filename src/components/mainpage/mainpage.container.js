
import { connect } from 'react-redux'
import { doLogout, clearMenu, addMenuItem, selectMenuItem, getTimeDim, getOrgUnitsDim, clearAccountingData } from '../../state/actions'
import MainPage from '../mainpage/mainpage'





const mapStateToProps = state => {
  return {
    timeTree: state.trees.time,
    timeSelected: state.trees.seltime,
    orgUnitsTree: state.trees.orgunits,
    orgUnitsSelected: state.trees.selorgunits,
    userName: state.auth.name,
  }
}


const mapDispatchToProps =  {
    clearMenu,
    addMenuItem,
    selectMenuItem,    
    doLogout,
    getTimeDim,
    getOrgUnitsDim,
    clearAccountingData
}



export default connect(
  mapStateToProps,
  mapDispatchToProps, null,  { pure: false }
)(MainPage)





