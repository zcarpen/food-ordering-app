import CartIcon from '../Cart/CartIcon';
import classes from "./HeaderCartButton.module.css";
import CartContext from '../../store/cart-context';
import {useContext} from 'react';

const HeaderCartButton = ({onShowCart}) => {
  const cartCtx = useContext(CartContext);

const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
  return acc + item.amount;
}, 0)
  return (
    <button className={classes.button} onClick={onShowCart}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;