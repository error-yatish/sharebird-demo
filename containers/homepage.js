import { connect } from 'react-redux'
import { namespaceConfig } from 'fast-redux'
import Homepage from '../components/homepage'
import mock from '../config/mock'

const DEFAULT_STATE = mock

const { action, getState: getHomepageState } = namespaceConfig(
    'homepage',
    DEFAULT_STATE
)

const mapStateToProps = (state) => getHomepageState(state)

export default connect(mapStateToProps)(Homepage)
