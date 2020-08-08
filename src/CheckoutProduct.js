import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {

    const [, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,

        })
    }

    return (
        <div class="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="" />
            <div className="checkoutProduct_info" >
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating) // array of length rating
                        .fill() // fills the array with nothing
                        .map((_)=>( // maps each value of array to star
                            <p><span role="img" aria-label="star">⭐</span></p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
