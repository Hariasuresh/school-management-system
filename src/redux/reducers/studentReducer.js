// Initial state for fees data
const initialState = {
    fees: [],          // Array to hold fee-related data (could be an array of fee records)
    isLoading: false,  // Loading state to show a loader while fetching data
    error: null,       // Error state in case of API errors
  };
  
  // Fees reducer to handle actions related to fees
  const feesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_FEES_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_FEES_SUCCESS':
        return {
          ...state,
          isLoading: false,
          fees: action.payload,  // Populate fees data with the action's payload
        };
      case 'FETCH_FEES_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload,  // Populate error state with the action's payload
        };
      case 'ADD_FEE':
        return {
          ...state,
          fees: [...state.fees, action.payload],  // Add a new fee record to the fees array
        };
      case 'UPDATE_FEE':
        return {
          ...state,
          fees: state.fees.map(fee =>
            fee.id === action.payload.id ? { ...fee, ...action.payload } : fee
          ),  // Update the fee record
        };
      case 'DELETE_FEE':
        return {
          ...state,
          fees: state.fees.filter(fee => fee.id !== action.payload.id),  // Remove the fee record
        };
      default:
        return state;
    }
  };
  
  export default feesReducer;
  