import React from "react";
import { Table } from "react-bootstrap";
import ToCartBtn from "./ToCartBtn";
import { CartConsumer } from "../../contexts/CartContext";

export default function AddressTable({
  user,
  history,
  adds,
  type,
  stepForward,
}) {
  return (
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
          {adds.map(({ aid, factory, address, contact, email, mobile }) => (
            <tr key={aid}>
              <td>
                <div style={{ height: "31px", lineHeight: "31px" }}>
                  {factory}
                </div>
              </td>
              <td colSpan="2" style={{ border: "transparent" }}>
                <div style={{ height: "31px", lineHeight: "31px" }}>
                  {address}
                </div>
              </td>
              <td>
                <div style={{ height: "31px", lineHeight: "31px" }}>
                  {contact}
                </div>
              </td>
              <td>
                <div style={{ height: "31px", lineHeight: "31px" }}>
                  {email}
                </div>
              </td>
              <td>
                <div style={{ height: "31px", lineHeight: "31px" }}>
                  {mobile}
                </div>
              </td>

              <CartConsumer>
                {({ handleDel, addToCart }) => (
                  <td>
                    {type === "account" && (
                      <button
                        className="btn btn-sm text-muted font-weight-bold"
                        onClick={() => handleDel(user, aid, "factory", "aid")}
                      >
                        Delete
                      </button>
                    )}
                    {type === "toCart" && (
                      <ToCartBtn
                        aid={aid}
                        addToCart={addToCart}
                        stepForward={stepForward}
                      />
                    )}
                  </td>
                )}
              </CartConsumer>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
}
