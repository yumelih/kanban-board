import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddTaskModalOpen: { open: false, func: "openAddTaskModal" },
  isDetailTaskOpen: { open: null, func: "openAddTaskDetailModal" },
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
          taskDescription: "Something Good",
          currentColumn: "Todo",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: true },
          ],
        },
        {
          taskId: "2",
          taskTitle: "Build War",
          taskDescription: "Something Good",
          currentColumn: "Done",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: false },
          ],
        },
        {
          taskId: "3",
          taskTitle: "Don't Ever Give Up",
          taskDescription: "Something Good",
          currentColumn: "Done",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: false },
          ],
        },
        {
          taskId: "4",
          taskTitle: "Warfare!!!",
          taskDescription: "Something Good",
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
          taskDescription: "Something Good",
          currentColumn: "Todo",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: true },
          ],
        },
        {
          taskId: "2",
          taskTitle: "War",
          taskDescription: "Something Good",
          currentColumn: "Todo",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: false },
          ],
        },
        {
          taskId: "3",
          taskTitle: "Don't Give Up",
          taskDescription: "Something Good",
          currentColumn: "Done",
          subtasks: [
            { subTaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subTaskId: 2, subTaskTitle: "Be a loser", finished: false },
          ],
        },
        {
          taskId: "4",
          taskTitle: "Warfare!!!",
          taskDescription: "Something Good",
          currentColumn: "Done",
          subtasks: [
            { subtaskId: 1, subtaskTitle: "Be a winner", finished: true },
            { subtaskId: 2, subtaskTitle: "Be a loser", finished: false },
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
    addTask(state, action) {
      const board = state.boards.find((item) => item.isActive);
      board.todos.push(action.payload);
    },
    switchBoard(state, action) {
      const board = state.boards.find((b) => b.id === action.payload);
      state.boards.forEach((board) => (board.isActive = false));
      board.isActive = true;
    },

    openAddTaskModal: {
      prepare(isOpen, whichModal) {
        return {
          payload: {
            isOpen,
            whichModal,
          },
        };
      },
      reducer(state, action) {
        state.isAddTaskModalOpen.open = action.payload.isOpen;
      },
    },

    openTaskDetailModal: {
      prepare(isOpen, whichModal) {
        return {
          payload: {
            isOpen,
            whichModal,
          },
        };
      },
      reducer(state, action) {
        state.isDetailTaskOpen.open = action.payload.isOpen;
      },
    },
  },
});

// export const getAllTasks = (board) => (state) => state.boards.boards[0].todos;
export const getAllBoards = (state) => state.boards.boards;
export const getBoard = (state) =>
  state.boards.boards.find((board) => board.isActive === true);
export const getTaskDetail = (state) =>
  getBoard(state).todos?.find(
    (todo) => todo.taskId === state.boards.isDetailTaskOpen.open,
  );
export const getAddTaskOpen = (state) => state.boards.isAddTaskModalOpen;
export const getDetailTaskOpen = (state) => state.boards.isDetailTaskOpen;

export const {
  addBoard,
  switchBoard,
  addTask,
  openAddTaskModal,
  openTaskDetailModal,
} = boardSlice.actions;
export default boardSlice.reducer;