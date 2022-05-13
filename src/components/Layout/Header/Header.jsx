import React, {Fragment} from "react";
import ButtonHeaderCart from "../../UI/ButtonHeaderCart/ButtonHeaderCart";
import styles from './Header.module.css';

const Header = (props) => {
    const {onShowCart} = props;
    return(
        <Fragment>
            <header className={styles.header}>
                <h1 className={styles['header-title__logo']}>React Food App</h1>
                <ButtonHeaderCart onClick={onShowCart}/>
            </header>
        </Fragment>
    )
}

export default Header;