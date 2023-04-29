import { createStore } from "redux";

const initialState = {
  rows: [],
  totalValue: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        rows: [...state.rows, action.payload],
      };
    case "UPDATE_ITEM":
      const updatedRows = state.rows.map((row) => {
        if (row.id === action.payload.id) {
          return {
            ...row,
            totalPrice: action.payload.totalPrice,
          };
        }
        return row;
      });
      return {
        ...state,
        rows: updatedRows,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
