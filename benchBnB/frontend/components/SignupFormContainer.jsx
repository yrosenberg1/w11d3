import {Signup} from '../actions/session_actions';
import SessionForm from './SessionForm';

const mSTP = ({ errors}) => {
    return {
        errors: errors.session,
        formType: 'signup',

    };
};


const mDTP = dispatch => {
    return {
        processForm: user => dispatch(Signup(user))
    }
};

export default connect(mSTP, mDTP)(SessionForm)