


import { connect } from 'react-redux'
import Graph from './graph'
import { getGraphData, setGraphType, clearAccountingData } from '../../state/actions'




const mapStateToProps = state => {
  return {
    timeTree: state.trees.time,
    timeSelected: state.trees.seltime,
    orgUnitsTree: state.trees.orgunits,
    orgUnitsSelected: state.trees.selorgunits,
    graphData: state.accountdata.graphData,
    graphType: state.accountdata.graphType
  }
}


const mapDispatchToProps =  {
  getGraphData,
  setGraphType,
  clearAccountingData  
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph)

