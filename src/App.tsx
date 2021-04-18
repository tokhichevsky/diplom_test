import React from "react";
import "./styles/index.scss";
import PageWrapper from "./wrappers/PageWrapper/PageWrapper";
import Screen from "./components/Screen/Screen";
import {Provider} from "react-redux";
import {store} from "./store";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback/ErrorFallback";

function App() {
  return (
    <Provider store={store}>
      <PageWrapper>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Screen/>
        </ErrorBoundary>
      </PageWrapper>
    </Provider>
  );
}

export default App;
