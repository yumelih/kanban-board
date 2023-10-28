import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./features/board/boardSlice";
// import modalSlice from "./features/board/modalSlice";

const store = configureStore({
  reducer: {
    boards: boardSlice,
    // modals: modalSlice,
  },
});

export default store;
