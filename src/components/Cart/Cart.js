import React from "react";
import { CartConsumer } from "../../contexts/CartContext";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import CartColumns from "./CartColumns";
import CartList from "./CartList";
import NewInsertBtn from "../Account/NewInsertBtn";
import CartTotals from "./CartTotals";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: "2rem",
    marginTop: "2.5rem",
  },
}));

export default function Cart({ history, toStepOne }) {
  const classes = useStyles();

  return (
    <div className="container">
      {/* <Title title={"Choose Quantitiy"} /> */}
      <Paper className={classes.root}>
        <CartConsumer>
          {({
            cart,
            cartSubtotal,
            cartTax,
            cartTotal,
            increment,
            decrement,
            removeItem,
            clearCart,
          }) => {
            return (
              <div>
                <CartColumns />
                <CartList
                  cart={cart}
                  increment={increment}
                  decrement={decrement}
                  removeItem={removeItem}
                  history={history}
                />
                <div className="text-center pt-5">
                  <NewInsertBtn
                    history={history}
                    content={
                      cart.length === 0
                        ? "Create an insert"
                        : "Create Another Insert"
                    }
                    toStepOne={toStepOne}
                  />
                </div>
                <CartTotals
                  cart={cart}
                  cartSubtotal={cartSubtotal}
                  cartTax={cartTax}
                  cartTotal={cartTotal}
                  clearCart={clearCart}
                  history={history}
                />
              </div>
            );
          }}
        </CartConsumer>
      </Paper>
    </div>
  );
}
