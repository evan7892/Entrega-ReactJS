import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget () {
    return(
        <FontAwesomeIcon icon={faCartShopping}/>
    )
}

export default CartWidget