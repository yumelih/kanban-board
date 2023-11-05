import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./features/board/boardSlice";
import { loadState } from "./utils/localStorage";
// import modalSlice from "./features/board/modalSlice";

const store = configureStore({
  reducer: {
    boards: boardSlice,
    // modals: modalSlice,
  },
  preloadedState: loadState(),
});

export default store;
