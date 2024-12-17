

import axios from 'axios';

export const fetchLibraryHistory = () => async (dispatch) => {
  dispatch({ type: 'FETCH_LIBRARY_HISTORY_REQUEST' });
  
  try {
    const response = await axios.get('http://your-backend-api.com/library-history'); // Update with actual backend API URL
    dispatch({
      type: 'FETCH_LIBRARY_HISTORY_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_LIBRARY_HISTORY_FAILURE',
      payload: error.message,
    });
  }
};
