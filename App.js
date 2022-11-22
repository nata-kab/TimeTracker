import React from "react";
import { Provider } from "react-redux";

import store from "./src/redux/store";
import GeneralScreen from "./src/components/GeneralScreen";

export default function App() {
  return (
    <Provider store={store}>
      <GeneralScreen />
    </Provider>
  );
}
