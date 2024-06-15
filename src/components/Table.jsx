import React from 'react';

const Table = ({ taskList }) => {
  const entryList = taskList.filter((item) => item.type === 'entry');
  return (
    <div className="row mt-5">
      <div className="col-md">
        <h3 className="text-center">Entry List</h3>
        <hr />
        {/* <!-- Entry list table  --> */}
        <table className="table table-striped table-hover border">
          <tbody id="entryList">
            {entryList.map((item, i) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{item.task}</td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button
                      onclick='handleDelete("${
        item.id
      }")'
                      type="button"
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <button
                      onclick="switchTask('${
        item.id
      }','bad')"
                      type="button"
                      className="btn btn-success"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
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
  );
};

export default Table;
