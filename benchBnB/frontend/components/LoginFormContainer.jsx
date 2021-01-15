// From mapStateToProps(state, ownProps):
// errors (array) - list of errors from the state
// formType (string): 'login' or 'signup', for each respective container
// From mapDispatchToProps(dispatch, ownProps):
// processForm (function): dispatching action creators login or signup, again depending on the container

import {connect} from 'react-redux';
import React from 'react';
import {login} from '../actions/session_actions';
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