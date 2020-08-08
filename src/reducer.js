export const intialState = {
    basket: [
        {
            id: "12321341",
            title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses",
            price:11.26,
            rating:5,
            image:"https://images-eu.ssl-images-amazon.com/images/I/81j0RhrgNNL.__BG0,0,0,0_FMpng_AC_UL600_SR393,600_.jpg"
        },
        {
            id: "12321341",
            title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses",
            price:11.26,
            rating:5,
            image:"https://images-eu.ssl-images-amazon.com/images/I/81j0RhrgNNL.__BG0,0,0,0_FMpng_AC_UL600_SR393,600_.jpg"
        }
    ],
}

// this is something new and cool
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price+amount, 0)


const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET': 
            // Logic for adding item to the basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            // logic for removing items from basket

            // we  cloned the basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id)

            if(index => 0){
                //item exists and we have to remove it from the basket
                newBasket.splice(index, 1) 
            }else{
                console.warn(`Can't Remove Product id: ${action.id} as it is not in the basket`)
            }

            return {
                ...state,
                basket: newBasket,
            }
        default:
            return state;
    }
}

export default reducer; 