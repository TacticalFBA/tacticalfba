import React from "react";
import { Table } from "react-bootstrap";
import ToCartBtn from "./ToCartBtn";
import { CartConsumer } from "../../contexts/CartContext";

export default function AddressTable({ history, adds, handleDel, type }) {
  return (
    adds.length > 0 && (
      <React.Fragment>
        <h6 className="pb-3 text-uppercase">Saved Factories</h6>
        <Table responsive hover>
          <thead>
            <tr>
              <th>Factory</th>
              <th colSpan="2">Address</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Moblile</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {adds.map(
              ({ aid, factory, address, zipcode, contact, email, mobile }) => (
                <tr key={aid}>
                  <td>{factory}</td>
                  <td colSpan="2">
                    {address}, {zipcode}
                  </td>
                  <td>{contact}</td>
                  <td>{email}</td>
                  <td>{mobile}</td>
                  <td>
                    {type === "account" && (
                      <button
                        className="btn btn-sm text-muted font-weight-bold"
                        onClick={() => handleDel(aid, "factory", "aid")}
                      >
                        Delete
                      </button>
                    )}
                    {type === "toCart" && (
                      <CartConsumer>
                        {({ addToCart }) => (
                          <ToCartBtn
                            aid={aid}
                            addToCart={addToCart}
                            history={history}
                          />
                        )}
                      </CartConsumer>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </React.Fragment>
    )
  );
}
