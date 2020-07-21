import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import executive from '../redux/executive'
import ExecutiveComponent from './ExecutiveComponent'

const { getExecutiveProducts } = executive.actions

const mapStateToProps = (state) => ({
   
      getExecutiveProducts: state[executive.name].executiveProducts
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            getExecutiveProducts
        },
        dispatch
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(ExecutiveComponent)
