// src/redux/reducers/libraryReducer.js

const initialState = {
    libraryHistory: [],
    loading: false,
    error: null,
  };
  
  const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_LIBRARY_HISTORY_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_LIBRARY_HISTORY_SUCCESS':
        return {
          ...state,
          loading: false,
          libraryHistory: action.payload,
        };
      case 'FETCH_LIBRARY_HISTORY_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default libraryReducer;
  