import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Templates({ inserts, handleDel, history }) {
  const chooseInsert = (pid, iid) => {
    const comb = {
      pid: pid,
      iid: iid
    };
    localStorage.setItem("comb", JSON.stringify(comb));
    history.push("/address");
  };

  const editInsert = (pid, iid) => {
    history.push(`/edit-template/${pid}/${iid}`);
  };
  return (
    <div className="mt-5">
      <div>
        <Link
          to="/insert"
          className="btn btn-sm text-orange font-weight-bold mb-5"
        >
          + Create Your Insert
        </Link>
      </div>
      {inserts.length > 0 && (
        <Table responsive hover>
          <thead>
            <tr>
              <th colSpan="4">Insert</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inserts.map(insert => (
              <tr key={insert.iName}>
                <td colSpan="4">
                  <img
                    src={insert.frontPre}
                    alt="front preview"
                    style={{ width: "16rem" }}
                  />
                  <img
                    src={insert.backPre}
                    alt="rear preview"
                    style={{ width: "16rem" }}
                  />
                </td>
                <td>{insert.iName}</td>
                <td>
                  <button
                    className="btn btn-sm text-orange font-weight-bold mr-3"
                    onClick={() => chooseInsert(insert.pid, insert.iid)}
                  >
                    Use
                  </button>

                  <button
                    className="btn btn-sm text-secondary font-weight-bold mr-3"
                    onClick={() => editInsert(insert.pid, insert.iid)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm text-muted font-weight-bold"
                    onClick={() => handleDel(insert.iid, "insert", "iid")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
