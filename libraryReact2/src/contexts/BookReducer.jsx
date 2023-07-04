import React from "react";

export const BookReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        data: [...state.data, action.book],
      };
    case "EDIT":
      return {
        ...state,
        data: state.data.map(item => (item.id === action.book.id ? action.book : item)),
      };
    case "DEL":
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};
