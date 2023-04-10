import React from 'react';
import logo from "../asset/bustrak logo.png";
import styles from './Header.module.scss';



function Header() {
    return ( <
        header >
        <
        div className = { styles.header } >
        <
        img className = '{styles.logo}'
        src = { logo }
        alt = "Logo" / >
        <
        h1 > Bustrak < /h1> <
        /div> <
        nav >
        <
        ul >
        <
        li > < a href = "/" > Home < /a></li >
        <
        li > < a href = "/buses" > Buses < /a></li >
        <
        li > < a href = "/about" > About < /a></li >
        <
        li > < a href = "/contact" > Contact < /a></li >
        <
        /ul> <
        /nav> <
        form className = "search-form" >
        <
        input type = "text"
        placeholder = "Search" / >
        <
        button type = "submit" > Search < /button> <
        /form> <
        /header>
    );
}

export default Header;