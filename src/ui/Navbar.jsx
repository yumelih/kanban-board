import SettingsButton from "../features/settings/SettingsButton";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex items-center bg-secondary px-6 shadow-sm shadow-neutral-50">
      <h1 className="text-2xl font-semibold text-primaryWhite ">
        Platform Launch
      </h1>
      <div className="ml-auto mr-2">
        <Button>+ Add a New Task</Button>
      </div>
      <SettingsButton />
    </div>
  );
}

export default Navbar;
