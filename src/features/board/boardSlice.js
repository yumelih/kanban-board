import { createSlice } from "@reduxjs/toolkit";
import randomIdGenerator from "../../utils/randomIdGenerator";

const initialState = {
  isAddTaskModalOpen: { open: false, func: "openAddTaskModal" },
  isDetailTaskOpen: { open: null, func: "openAddTaskDetailModal" },
  isAddNewColumnOpen: false,
  isEditBoard: null,
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
            { subtaskId: 1, subtaskTitle: "Be a winner", finished: true },
            { subtaskId: 2, subtaskTitle: "Be a loser", finished: true },
          ],
        },
        {
          taskId: "2",
          taskTitle: "Build War",
          taskDescription: "Something Good",
          currentColumn: "Done",
          subtasks: [
            { subtaskId: 1, subtaskTitle: "Be a crybaby", finished: true },
            { subtaskId: 2, subtaskTitle: "Be a loser", finished: false },
          ],
        },
        {
          taskId: "3",
          taskTitle: "Don't Ever Give Up",
          taskDescription: "Something Good",
          currentColumn: "Done",
          subtasks: [
            { subtaskId: 1, subtaskTitle: "Be a winner", finished: true },
            { subtaskId: 2, subtaskTitle: "Be a man", finished: false },
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
            { subtaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subtaskId: 2, subTaskTitle: "Be a loser", finished: true },
          ],
        },
        {
          taskId: "2",
          taskTitle: "War",
          taskDescription: "Something Good",
          currentColumn: "Todo",
          subtasks: [
            { subtaskId: 1, subTaskTitle: "Be a winner", finished: true },
            { subtaskId: 2, subTaskTitle: "Be a loser", finished: false },
          ],
        },
        {
          taskId: "3",
          taskTitle: "Don't Give Up",
          taskDescription: "Something Good",
          currentColumn: "Done",
          subtasks: [
            { subtaskId: 1, subtaskTitle: "Be a winner", finished: true },
            { subtaskId: 2, subtaskTitle: "Be a loser", finished: false },
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
      state.boards.push({
        id: randomIdGenerator(),
        name: action.payload,
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
              { subtaskId: 1, subtaskTitle: "Be a winner", finished: true },
              { subtaskId: 2, subtaskTitle: "Be a loser", finished: true },
            ],
          },
        ],
      });
    },
    deleteBoard(state, action) {
      if (action.payload === "1") {
        console.warn("You can't delete the first board");
      } else {
        boardSlice.caseReducers.switchBoard(state, {
          type: "switchBoard",
          payload: "1",
        });
        state.boards = state.boards.filter(
          (board) => board.id !== action.payload,
        );
      }
    },

    editBoard(state, action) {
      const board = state.boards.find(
        (board) => board.id === state.isEditBoard,
      );
      board.name = action.payload;
    },
    addColumn(state, action) {
      const board = state.boards.find((item) => item.isActive);
      board.columnNames.push(action.payload);
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
    updateSubtask: {
      prepare(taskId, subtaskId, isChecked) {
        return {
          payload: {
            taskId,
            subtaskId,
            isChecked,
          },
        };
      },
      reducer(state, action) {
        const subtask = state.boards
          .find((board) => board.isActive)
          .todos.find((task) => task.taskId === action.payload.taskId)
          .subtasks.find(
            (subtask) => subtask.subtaskId === action.payload.subtaskId,
          );
        subtask.finished = action.payload.isChecked;
      },
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
    openAddColumnModal(state, action) {
      state.isAddNewColumnOpen = action.payload;
    },
    openEditBoardModal(state, action) {
      state.isEditBoard = action.payload;
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
export const getAddColumnOpen = (state) => state.boards.isAddNewColumnOpen;

export const {
  addBoard,
  switchBoard,
  addTask,
  openAddTaskModal,
  openTaskDetailModal,
  updateSubtask,
  addColumn,
  openAddColumnModal,
  deleteBoard,
  editBoard,
  openEditBoardModal,
} = boardSlice.actions;
export default boardSlice.reducer;
