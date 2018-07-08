


import { connect } from 'react-redux'
import Graph from './graph'




const mapStateToProps = state => {
  return {
    timeTree: state.trees.time,
    timeSelected: state.trees.seltime,
    orgUnitsTree: state.trees.orgunits,
    orgUnitsSelected: state.trees.selorgunits
  }
}


const mapDispatchToProps =  {

}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph)


