import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';



// There are two methods to pass prop to  a function:
// First is just passing props
// or pass values as object destructuring
function Product({id, title, price, rating, image}) {

    const [, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating) // array of length rating
                        .fill() // fills the array with nothing
                        .map((_)=>( // maps each value of array to star
                            <p><span role="img" aria-label="star">⭐</span></p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button className="" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
