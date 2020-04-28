import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { firebase, db } from "../../config/Firebase";
import dateFormat from "dateformat";
import axios from "axios";

export default class PaypalBtn extends React.Component {
  render() {
    const {
      user,
      inserts,
      adds,
      cart,
      clearCart,
      cartTotal,
      openSpinner,
      closeSpinner,
    } = this.props;
    const onSuccess = (payment) => {
      openSpinner();
      // console.log("The payment was succeeded!", payment);
      const items = cart.map((item) => {
        return {
          pid: item.pid,
          insert: inserts.filter((insert) => insert.iid === item.iid)[0],
          add: adds.filter((add) => add.aid === item.aid)[0],
          count: item.count,
          price: item.price,
          total: item.total,
        };
      });

      const genID = () => {
        return Math.floor(
          Math.random() * Math.floor(Math.random() * Date.now())
        )
          .toString()
          .substring(0, 10);
      };

      delete payment["address"];
      // console.log(payment);

      const order = {
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        items: items,
        info: {
          orderNO: genID(),
          date: dateFormat("mmmm dS, yyyy, hh:MM:ss TT"),
          // June 9th, 2007, 05:46:21 PM
          total: cartTotal,
          user: user,
        },
        payment: {
          ...payment,
        },
      };

      const ref = db.collection("users").doc(user).collection("order");
      const orderList = db.collection("orders");
      const endpoint = "api/orderEmail";
      ref
        .add(order)
        .then(() => {
          orderList.add(order).catch((err) => console.log(err));
        })
        .then(() => {
          clearCart();
          closeSpinner();
          axios
            .post(`https://tfbaserver.herokuapp.com/${endpoint}`, order)
            // .then((res) => console.log(res))
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err.message);
        });

      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      // console.log("The payment was cancelled!", data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    let env = "production"; // 'production' or "sandbox"
    let currency = "USD"; // or you can set this value from your props or state
    let total = cartTotal; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
    const shipping = 1;

    const client = {
      sandbox: process.env.REACT_APP_PALPAL_KEY_SANDBOX,
      production: process.env.REACT_APP_PALPAL_KEY_PRODUCTION,
    };
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        shipping={shipping}
        currency={currency}
        total={total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
