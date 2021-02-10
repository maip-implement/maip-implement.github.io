import React from "react";

const Table = (props) => {
  const { tableTitle, data } = props;

  return (
    <section className="limiter" style={{ marginTop: "100px" }}>
      <h3 className="text-center">{tableTitle}</h3>
      <div className="table100 ver1 m-b-110" style={{ height: "inherit" }}>
        <div className="table100-head">
          <table>
            <thead>
              <tr className="row100 head">
                <th className="column1">#</th>
                <th className="column2">Folder Name</th>
                <th className="column3">Videos</th>
                <th className="column4">Drives</th>
              </tr>
            </thead>
          </table>
        </div>
        <div style={{ background: "none" }}></div>
        <div className="table100-body js-pscroll">
          <table>
            <tbody>
              {data?.map(({ folderName, contents, driveNames }, index) => (
                <tr className="row100 body" key={index}>
                  <td className="column1">{index + 1}</td>
                  <td className="column2">{folderName}</td>
                  <td className="column3">
                    {contents?.map(({ video, link }, index) => (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={link}
                        key={index}
                      >
                        <button>{video}</button>
                      </a>
                    ))}
                  </td>
                  <td className="column4">{driveNames?.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
