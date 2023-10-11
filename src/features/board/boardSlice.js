import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [
    {
      id: "1",
      name: "Platform launch",
      isActive: true,
      isArchived: false,
      columnNames: ["Todo", "Doing", "Done"],
      todos: [
        {
          taskId: "1",
          taskTitle: "Build UI",
          currentColumn: "Todo",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: true },
          ],
        },
        {
          taskId: "2",
          taskTitle: "Build War",
          currentColumn: "Done",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: false },
          ],
        },
        {
          taskId: "3",
          taskTitle: "Don't Ever Give Up",
          currentColumn: "Done",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: false },
          ],
        },
        {
          taskId: "4",
          taskTitle: "Warfare!!!",
          currentColumn: "Done",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: false },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Test Board",
      isActive: false,
      isArchived: false,
      columnNames: ["Todo", "Doing", "Done"],
      todos: [
        {
          taskId: "1",
          taskTitle: "UI",
          currentColumn: "Todo",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: true },
          ],
        },
        {
          taskId: "2",
          taskTitle: "War",
          currentColumn: "Todo",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: false },
          ],
        },
        {
          taskId: "3",
          taskTitle: "Don't Ever Give Up",
          currentColumn: "Done",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: false },
          ],
        },
        {
          taskId: "4",
          taskTitle: "Warfare!!!",
          currentColumn: "Done",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: false },
          ],
        },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard(state, action) {
      state.boards.push(action.payload);
    },
    addColumn(state, action) {
      const board = state.boards.find((item) => item.id === action.payload.id);
    },
    switchBoard(state, action) {
      const board = state.boards.find((b) => b.id === action.payload);
      state.boards.forEach((board) => (board.isActive = false));
      board.isActive = true;
    },
  },
});

// export const getAllTasks = (board) => (state) => state.boards.boards[0].todos;
export const getAllBoards = (state) => state.boards.boards;
export const getBoard = (state) =>
  state.boards.boards.find((board) => board.isActive === true);

export const { addBoard, switchBoard } = boardSlice.actions;
export default boardSlice.reducer;
