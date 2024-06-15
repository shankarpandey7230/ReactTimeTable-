import { useState } from 'react';

import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [taskList, setTaskList] = useState([]);
  const addTaskList = (task) => {
    // console.log(task);
    const obj = {
      ...task,
      id: randomId(),
      type: 'entry',
    };
    setTaskList([...taskList, obj]);
  };
  console.log(taskList);

  const randomId = (length = 6) => {
    const str =
      'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    let id = '';
    for (let i = 0; i < 6; i++) {
      const randmIndex = Math.floor(Math.random() * str.length);
      id += str[randmIndex];
    }
    return id;
  };

  return (
    <div className="wrapper pt-5">
      {/* <!-- title  --> */}
      <div className="container">
        <h1 className="text-center">Follow Time Table</h1>

        {/* <!-- form  --> */}
        <Form addTaskList={addTaskList} />

        {/* <!-- tables --> */}
        <Table taskList={taskList} />

        <div className="alert alert-success">
          The total hours allocated = <span id="ttlHrs">0</span> hrs
        </div>
      </div>
    </div>
  );
}

export default App;
