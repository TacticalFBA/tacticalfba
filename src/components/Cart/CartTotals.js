import React from "react";
import PaypalBtn from "./PaypalBtn";
import { UserConsumer } from "../../contexts/UserContext";
import OrderSuccessModal from "./OrderSuccessModal";
import Spinner from "../Spinner";

export default function CartTotals({ cart, cartTotal, clearCart, history }) {
  const [open, setOpen] = React.useState(false);
  const [spin, setSpin] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openSpinner = () => {
    setSpin(true);
  };

  const closeSpinner = () => {
    setSpin(false);
    handleOpen();
  };

  return (
    <React.Fragment>
      <div className="container">
        <hr className="mt-5" />
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <div className="mb-3">
              <h6>total: $ {cartTotal}</h6>
            </div>

            <div>
              <UserConsumer>
                {({ user, inserts, adds }) => (
                  <React.Fragment>
                    {cart.length > 0 && (
                      <PaypalBtn
                        inserts={inserts}
                        adds={adds}
                        user={user}
                        cart={cart}
                        cartTotal={cartTotal}
                        clearCart={clearCart}
                        openSpinner={openSpinner}
                        closeSpinner={closeSpinner}
                      />
                    )}
                    <Spinner spin={spin} />
                    <OrderSuccessModal
                      open={open}
                      handleClose={handleClose}
                      history={history}
                      user={user}
                    />
                  </React.Fragment>
                )}
              </UserConsumer>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
