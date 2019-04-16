import Counter from './counter';
import {connect} from 'react-redux';
import * as ActionCreators from '../redux/index';

export default connect(
    state => ({counter:state.counter}),
    ActionCreators
)(Counter)