import React, { useState } from "react";
import { db } from "../../config/Firebase";
import { validation } from "./AddValidation";
import { CartConsumer } from "../../contexts/CartContext";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function AddressForm({ user, location, history }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  const [add, setAdd] = useState({
    factory: "",
    address: "",
    contact: "",
    email: "",
    mobile: "",
  });

  const handleInputChange = (e) => {
    let newAdd = Object.assign({}, add);
    newAdd[e.currentTarget.name] = e.currentTarget.value;
    setAdd(newAdd);
  };

  const saveAdd = (error, cb) => {
    let count = 0;
    for (const key in add) {
      if (add[key].trim() !== "") count++;
    }
    console.log(1);
    if (Object.keys(error).length === 0 && count === Object.keys(add).length) {
      const newAdd = {
        factory: "",
        address: "",
        contact: "",
        email: "",
        mobile: "",
      };
      console.log(2);
      setAdd(newAdd);
      const ref = db.collection("users").doc(user).collection("factory");
      ref
        .add(add)
        .then((docRef) => {
          const aid = docRef.id;
          const comb = JSON.parse(localStorage.getItem("comb"));
          comb.aid = aid;
          localStorage.setItem("comb", JSON.stringify(comb));
          if (location.pathname === "/address") {
            cb(history);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const [error, setError] = useState({});

  const checkValid = (e) => {
    const field = e.target.name;
    const value = e.target.value.trim();
    const target = validation.filter((item) => item.field === field)[0];
    const tempError = Object.assign({}, error);

    for (let i = 0; i < target.checkList.length; i++) {
      if (!target.checkList[i].rule.test(value)) {
        tempError[field] = target.checkList[i].message;
        setError(tempError);
        return;
      } else {
        delete tempError[field];
        setError(tempError);
      }
    }
  };

  return (
    <div className="mb-5">
      <form>
        <div className="form-row">
          {/* factory name can not be duplicate */}
          <div className="form-group col-md-4">
            <label htmlFor="factory">Factory Name</label>
            <input
              type="text"
              className="form-control"
              name="factory"
              id="factory"
              placeholder="Factory One..."
              value={add.factory}
              onBlur={(e) => checkValid(e)}
              onChange={(e) => handleInputChange(e)}
            />
            {
              <small className="text-orange">
                {"factory" in error ? error["factory"] : null}
              </small>
            }
          </div>
          {/* check if contains charators "省、市" */}
          <div className="form-group col-md-8">
            <label htmlFor="address">
              Factory Address{" "}
              <small className="text-muted">* Address must be in Chinese</small>
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              placeholder="中国上海市... "
              value={add.address}
              onBlur={(e) => checkValid(e)}
              onChange={(e) => handleInputChange(e)}
            />
            {
              <small className="text-orange">
                {"address" in error ? error["address"] : null}
              </small>
            }
          </div>
        </div>
        <div className="form-row">
          {/* check if entered */}
          <div className="form-group col-md-4">
            <label htmlFor="contact">Factory Contact Name</label>
            <input
              type="text"
              className="form-control"
              name="contact"
              id="contact"
              placeholder="Mary"
              value={add.contact}
              onBlur={(e) => checkValid(e)}
              onChange={(e) => handleInputChange(e)}
            />
            {
              <small className="text-orange">
                {"contact" in error ? error["contact"] : null}
              </small>
            }
          </div>
          {/* to add email validator */}
          <div className="form-group col-md-4">
            <label htmlFor="email">Factory Contact Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="mary@tacticalfba.com"
              value={add.email}
              onBlur={(e) => checkValid(e)}
              onChange={(e) => handleInputChange(e)}
            />
            {
              <small className="text-orange">
                {"email" in error ? error["email"] : null}
              </small>
            }
          </div>
          {/* to add mobile number validator */}
          <div className="form-group col-md-4">
            <label htmlFor="mobile">
              Factory Contact Mobile{" "}
              <small className="text-muted">* 11 digit Chinese number</small>
            </label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              id="mobile"
              placeholder="13800000000"
              value={add.mobile}
              onBlur={(e) => checkValid(e)}
              onChange={(e) => handleInputChange(e)}
            />
            {
              <small className="text-orange">
                {"mobile" in error ? error["mobile"] : null}
              </small>
            }
          </div>
        </div>
        <CartConsumer>
          {({ addToCart }) => (
            <div className={classes.root}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() => saveAdd(error, addToCart)}
              >
                Save
              </Button>
            </div>
          )}
        </CartConsumer>
      </form>
    </div>
  );
}
