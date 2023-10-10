import settingsIcon from "../../assets/threedots.png";

function SettingsButton() {
  return (
    <img
      src={settingsIcon}
      alt="setting button"
      className="w-7 cursor-pointer hover:opacity-50"
    />
  );
}

export default SettingsButton;
