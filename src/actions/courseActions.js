// actions/courseActions.js

import axios from 'axios';
import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE
} from './types';

// Action creator to fetch courses
export const fetchCourses = () => {
  return async dispatch => {
    dispatch({ type: FETCH_COURSES_REQUEST });

    try {
      const response = await axios.get('http://localhost:3001/courses');
      const courses = response.data;

      dispatch({
        type: FETCH_COURSES_SUCCESS,
        payload: courses
      });
    } catch (error) {
      dispatch({
        type: FETCH_COURSES_FAILURE,
        payload: error.message
      });
    }
  };
};
