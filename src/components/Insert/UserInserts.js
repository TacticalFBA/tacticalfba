import React from 'react'

export default function UserInserts({ history, myInserts }) {

    const handleClick = (pid, iid, iName, frontPre, backPre) => {
        localStorage.setItem("comb", JSON.stringify(
            {
                pid: pid,
                iid: iid
            }
        ))
        history.push("/address");
    }

    return (
        <div>
            <h6 className="text-dark text-center">Your saved inserts:</h6>
            <div className="mt-3 text-center">
                {myInserts.map(insert =>
                    <button
                        key={insert.iName}
                        className="btn btn-sm btn-outline-secondary mr-3 mb-2"
                        onClick={() => handleClick(insert.pid, insert.iid, insert.iName, insert.frontPre, insert.backPre)}
                    >
                        {insert.iName}
                    </button>
                )
                }
            </div>
        </div >
    )
}
