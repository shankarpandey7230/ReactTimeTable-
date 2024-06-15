import { useState } from 'react';

import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="wrapper pt-5">
      {/* <!-- title  --> */}
      <div className="container">
        <h1 className="text-center">Follow Time Table</h1>

        {/* <!-- form  --> */}
        <Form />

        {/* <!-- tables --> */}
        <div className="row mt-5">
          <div className="col-md">
            <h3 className="text-center">Entry List</h3>
            <hr />
            {/* <!-- Entry list table  --> */}
            <table className="table table-striped table-hover border">
              <tbody id="entryList"></tbody>
            </table>
          </div>
          <div className="col-md">
            <h3 className="text-center">Bad List</h3>
            <hr />

            {/* <!-- Bad List table --> */}
            <table className="table table-striped table-hover border">
              <tbody id="badList"></tbody>
            </table>

            <div className="alert alert-success">
              You could have saved = <span id="savedHrsElm"></span> hr
            </div>
          </div>
        </div>

        <div className="alert alert-success">
          The total hours allocated = <span id="ttlHrs">0</span> hrs
        </div>
      </div>
    </div>
  );
}

export default App;
