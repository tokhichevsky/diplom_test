import React from "react";
import "./styles/index.scss";
import PageWrapper from "./wrappers/PageWrapper/PageWrapper";
import Screen from "./components/Screen/Screen";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
  return (
    <Provider store={store}>
      <PageWrapper>
        <Screen/>
      </PageWrapper>
    </Provider>
  );
}

export default App;
