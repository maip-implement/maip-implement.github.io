import React from "react";

const Table = (props) => {
  const {tableTitle} = props;

  return (
    <section className="limiter" style={{ marginTop: "100px" }}>
      <h1>{tableTitle}</h1>
      <div className="table100 ver1 m-b-110" style={{ height: "inherit" }}>
        <div className="table100-head">
          <table>
            <thead>
              <tr className="row100 head">
                <th className="column0">#</th>
                <th className="column3">Folder Name</th>
                <th className="column1">content</th>
                <th className="column5">Click to visit</th>
              </tr>
            </thead>
          </table>
        </div>
        <div style={{ marginTop: "20px", background: "none" }}></div>
        <div className="table100-body js-pscroll">
          <table>
            <tbody>
              <tr className="row100 body">
                <td className="column0">1</td>
                <td className="column3">Boost Your Base</td>
                <td className="column1">Folder 1 to 6</td>
                <td className="column5">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com"
                  >
                    Link
                  </a>
                </td>
              </tr>
              <tr className="row100 body">
                <td className="column0">2</td>
                <td className="column3">Boost Your Base</td>
                <td className="column1">Folder 7 to 12</td>
                <td className="column5">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com"
                  >
                    Link
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
