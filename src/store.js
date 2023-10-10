import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./features/board/boardSlice";

const store = configureStore({
  reducer: {
    boards: boardSlice,
  },
});

export default store;
