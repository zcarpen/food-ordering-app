import {Fragment} from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onShowCart}) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious foods" />
      </div>
    </Fragment>
  )
}

export default Header;