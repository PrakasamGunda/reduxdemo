import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { UiActions } from '../../store/ui-slice';


const CartButton = (props) => {
  const numberOfItems = useSelector(state => state.cartSlice.totalQuantity)
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(UiActions.toggleUi())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
