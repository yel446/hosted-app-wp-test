import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
// import Welcome from "remote_app_wp/Welcome";
// import Counter from "remote_app_wp/Counter";

import "./index.scss";
import "./App.scss";
import { useEffect } from "react";
import { useErrorBoundary } from "use-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback/ErrorFallback";

const Welcome = React.lazy(() => import("remote_app_wp/Welcome"));
const Counter = React.lazy(() => import("remote_app_wp/Counter"));
const Sample = React.lazy(() => import("custom_library/Sample"));

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "app-component1-mf": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const App: React.FC = () => {
  const { ErrorBoundary } = useErrorBoundary({
    onDidCatch: (error, errorInfo) => {
      // For logging/reporting
      console.log(error, " |===| ", errorInfo);
    },
  });

  const test = (e: any) => {
    alert("evt :" + e);
  };

  const increaseDouble = function () {
    console.log("ok");
  };

  return (
    <div className="hosted-app">
      <h1>
        Hosted App with <b>Webpack</b>
        {"😎"}
      </h1>
      <div className="hosted-app__displayer">
        <div className="hosted-app__displayer__block">
          <h3 className="title no"> 👇🏾 Remote Component 1 👇🏾 </h3>
          <div className="container no">
            <ErrorBoundary
              renderError={({ error }) => <ErrorFallback error={error} />}
            >
              <Suspense fallback={<p> no component yet 😝</p>}>
                <Welcome />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
        <div className="hosted-app__displayer__block">
          <h3 className="title no"> 👇🏾 Remote Component 2 👇🏾 </h3>
          <div className="container no">
            <ErrorBoundary
              renderError={({ error }) => <ErrorFallback error={error} />}
            >
              <Suspense fallback={<p> no component yet 😝</p>}>
                {/* <Sample text="Bonjour!!" />*/}
                {/*<Counter /> */}
                <app-component1-mf text="yoo! ✌️"></app-component1-mf>
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
