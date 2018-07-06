
import { connect } from 'react-redux'
import { doLogout, getTimeDim, getOrgUnitsDim } from '../../state/actions'
import MainPage from '../mainpage/mainpage'




const mapStateToProps = state => {
  return {
    timeTree: state.trees.time,
    timeSelected: state.trees.seltime,
    orgUnitsTree: state.trees.orgunits,
    orgUnitsSelected: state.trees.selorgunits,
    userName: state.auth.name
  }
}


const mapDispatchToProps =  {
    doLogout,
    getTimeDim,
    getOrgUnitsDim,
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)





