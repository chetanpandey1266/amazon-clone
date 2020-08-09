export const intialState = {
    basket: [],
    user: null
}

// this is something new and cool
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price+amount, 0)


const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
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