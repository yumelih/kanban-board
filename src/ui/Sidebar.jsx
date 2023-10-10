import BoardList from "../features/board/BoardList";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div className="row-span-full bg-secondary py-6 pr-6 text-primaryGray shadow-sm shadow-neutral-50">
      <Logo />
      <BoardList />
    </div>
  );
}

export default Sidebar;
