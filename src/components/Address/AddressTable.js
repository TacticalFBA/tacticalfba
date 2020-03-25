import React from 'react'
import { Table } from "react-bootstrap"

export default function AddressTable({ history, adds, addToCart, handleDel, type }) {
    return adds.length > 0 &&
        (<Table responsive hover>
            < thead >
                <tr>
                    <th>Factory</th>
                    <th colSpan="3">Address</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Moblile</th>
                    <th></th>
                </tr>
            </thead >
            <tbody>
                {adds.map(
                    ({ aid, factory, address, zipcode, contact, email, mobile }) =>
                        <tr key={aid}>
                            <td>{factory}</td>
                            <td colSpan="3">{address}, {zipcode}</td>
                            <td>{contact}</td>
                            <td>{email}</td>
                            <td>{mobile}</td>
                            <td>
                                {type === "account" &&
                                    <button className="btn btn-sm text-muted font-weight-bold"
                                        onClick={() => handleDel(aid, "factory", "aid")}>
                                        Delete
                                    </button>
                                }
                                {type === "toCart" &&
                                    <button className="btn btn-sm text-orange font-weight-bold"
                                        onClick={() => addToCart(aid, factory, history)}>
                                        Send to this factory
                                    </button>
                                }
                            </td>
                        </tr>
                )}
            </tbody >
        </Table >)
}