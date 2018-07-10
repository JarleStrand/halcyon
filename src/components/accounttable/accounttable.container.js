


import { connect } from 'react-redux'
import AccountTable from './accounttable'
import { getTableData, clearAccountingData } from '../../state/actions'




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
  getTableData,
  clearAccountingData  
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountTable)



