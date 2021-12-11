
export const initialState ={
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex( (items)=> items.id === action.id);
            const newBasket = [...state.basket];
            if(index>=0){
                newBasket.splice(index,1);
            }
            return {
                ...state,
                basket: [...newBasket]
            };

        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

