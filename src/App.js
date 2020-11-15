import React, { Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <Form />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
