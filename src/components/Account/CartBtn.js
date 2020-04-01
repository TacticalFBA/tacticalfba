import React from "react";
import { Link } from "react-router-dom";
import { CartConsumer } from "../../contexts/CartContext";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function CartBtn({ history }) {
  return (
    <Link to="/cart" style={{ marginRight: "1rem" }}>
      <IconButton aria-label="cart">
        <CartConsumer>
          {({ cart }) => (
            <StyledBadge badgeContent={cart.length} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          )}
        </CartConsumer>
      </IconButton>
    </Link>
  );
}
