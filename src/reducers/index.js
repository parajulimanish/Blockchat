import { combineReducers } from 'redux'
import { fromJS } from 'immutable'

import * as actionTypes from '../constants/actionTypes';

// To add to the initial state, add it below
const INITIAL_STATE = {
    userAddress: "0x0",
    messages: [],
    web3: null,
    contractInstance: null,
}

export default function dmsgReducer(state = INITIAL_STATE, action = {})
{
    switch (action.type)
    {
        case actionTypes.FETCH_WEB3_CONNECTION_SUCCESS:
            return Object.assign({}, state, {
                web3: action.web3,
                userAddress: action.userAddress,
                contractInstance: action.contractInstance
            })
        // Processing of the action is added to the following
        case actionTypes.FETCH_TIMELINE_SUCCESS:
            return Object.assign({}, state, {
                messages: action.payload
            })
        case actionTypes.ADD_MESSAGE:
            // Add to the beginning of the list
            return Object.assign({}, state, {
                messages: [action.payload].concat(state.messages)
            })
        default:
            return state
    }
}
