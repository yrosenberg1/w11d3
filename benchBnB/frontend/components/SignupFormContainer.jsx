import {Signup} from '../actions/session_actions';
import SessionForm from './SessionForm';

const mSTP = ({ errors}) => {
    return {
        errors: errors.session,
        formType: 'login',

    };
};


const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
    }
};

export default connect(mSTP, mDTP)(SessionForm)