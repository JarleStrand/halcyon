


import { connect } from 'react-redux'
import Account from './account'
import { getTableData } from '../../state/actions'




const mapStateToProps = state => {
  return {
    timeTree: state.trees.time,
    timeSelected: state.trees.seltime,
    orgUnitsTree: state.trees.orgunits,
    orgUnitsSelected: state.trees.selorgunits,
    tableData: state.accountdata.tableData
  }
}


const mapDispatchToProps =  {
  getTableData
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)



