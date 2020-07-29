import React from 'react'
//import '../Menu.css'

function ButtonLink(props) {
    console.log(props);

    // props = Objeto do react
    // props => { classname: "O que passarem" , 
    //             href: "/"  }


    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;