const KEY = "redux";

export function loadState() {
  try {
    const localState = localStorage.getItem(KEY);
    if (!localState) return undefined;
    return JSON.parse(localState);
  } catch (err) {
    return err.message;
  }
}

export function saveState(state) {
  const localState = JSON.stringify(state);
  localStorage.setItem(KEY, localState);
}
