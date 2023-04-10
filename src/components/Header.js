import React from 'react';

function Header() {
    return ( <
        header >
        <
        div className = "logo" >
        <
        img src = "logo.png"
        alt = "Logo" / >
        <
        h1 > Staff Bus Management App < /h1> <
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