
import { connect } from 'react-redux'
import { doLogout, clearMenu, addMenuItem, selectMenuItem, getTimeDim, getOrgUnitsDim, clearAccountingData } from '../../state/actions'
import MainPage from '../mainpage/mainpage'
import reqpending from '../../state/reqpending/reqpending.reducer';




const mapStateToProps = state => {
  return {
    timeTree: state.trees.time,
    timeSelected: state.trees.seltime,
    orgUnitsTree: state.trees.orgunits,
    orgUnitsSelected: state.trees.selorgunits,
    userName: state.auth.name,
    isLoading: state.reqpending.count>0
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





