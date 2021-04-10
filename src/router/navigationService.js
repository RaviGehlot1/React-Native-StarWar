import React from 'react'
import { Actions } from 'react-native-router-flux';
import { NAVIGATE_TO_DETAILS } from '../config/constants'
export const naivgateToDetails = ( data, title ) => dispatch => {
    dispatch({ type: NAVIGATE_TO_DETAILS, todos : data, title : title });
    Actions.details()
  };