import React from 'react'
import AddItem from './AddItem'
import AddColumns from './AddColumns'

export default function AddressList({ user, adds, match, history }) {


    return (

        <div className="pt-5">
            <h4>Choose Address</h4>
            <AddColumns />
            {
                adds.map(add => (
                    <AddItem key={add.aid} user={user} add={add} match={match} history={history} />
                ))
            }
        </div>
    );
}
