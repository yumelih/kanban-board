import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { debounce } from "debounce";
import { saveState } from "./utils/localStorage.js";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 1000),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
