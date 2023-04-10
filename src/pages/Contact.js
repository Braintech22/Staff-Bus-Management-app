import React from 'react';

function Contact() {
    return ( <
        div >
        <
        h1 > Contact Us < /h1> <
        p > Feel free to contact us
        if you have any questions or concerns! < /p> <
        ul >
        <
        li > Email: info @staffbusmanagement.com < /li> <
        li > Phone: 555 - 555 - 5555 < /li> <
        /ul> <
        h2 > Send Us a Message < /h2> <
        form >
        <
        label htmlFor = "name" > Name < /label> <
        input type = "text"
        id = "name"
        name = "name" / >
        <
        label htmlFor = "email" > Email < /label> <
        input type = "email"
        id = "email"
        name = "email" / >
        <
        label htmlFor = "message" > Message < /label> <
        textarea id = "message"
        name = "message" > < /textarea> <
        button type = "submit" > Send Message < /button> <
        /form> <
        /div>
    );
}

export default Contact;