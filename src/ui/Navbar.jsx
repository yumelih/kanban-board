import { useDispatch, useSelector } from "react-redux";
import SettingsButton from "../features/settings/SettingsButton";
import Button from "./Button";
import {
  deleteBoard,
  getBoard,
  openAddTaskModal,
} from "../features/board/boardSlice";
import Dropdown from "./Dropdown";
import { useState } from "react";

function Navbar({ onAddTask }) {
  const dispatch = useDispatch();
  const board = useSelector(getBoard);
  const boardName = board.name;
  const boardId = board.id;

  return (
    <div className="relative flex items-center bg-secondary px-6 shadow-sm shadow-neutral-50">
      <h1 className="text-2xl font-semibold text-primaryWhite ">{boardName}</h1>
      <div className="ml-auto mr-2">
        <Button render={() => dispatch(openAddTaskModal(true, "addTaskModal"))}>
          + Add a New Task
        </Button>
      </div>
      <Dropdown>
        <Dropdown.Toggle opens="boardSettings">
          <SettingsButton />
        </Dropdown.Toggle>
        <Dropdown.List opens="boardSettings">
          <Dropdown.Item
            color="text-red-500"
            onClick={() => dispatch(deleteBoard(boardId))}
          >
            <span>Delete</span>
          </Dropdown.Item>
          <Dropdown.Item>Edit</Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
}

export default Navbar;
