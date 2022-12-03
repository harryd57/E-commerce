import data from '../../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = data.find((item) => item.id === parseInt(action.payload));
      const {id, title, price, img} = newItem;
      let newCart = {id: id, title:title, price:price, img:img, amount:1, inCart:true};
      if (state.cart.length !== 0){
        const isFound = state.cart.some(element => {
          if (element.id === id) {
          return true;
        }
        return false;
        });
        if (isFound){
          const items = state.cart.find((item) => item.id === id);
          newCart = {...items, amount: items.amount + 1};
        }
        else{
          newCart = {id: id, title:title, price:price, img:img, amount:1, inCart:true};
        }
      }
          let newList = [...state.cart, newCart]
          const seen = new Set();
          const filteredArr = newList.filter(el => {
          const duplicate = seen.has(el.id);
          seen.add(el.id);
          return !duplicate;
        });
      return {...state, cart:filteredArr};


    case 'CLEAR_CART':
      return {...state, cart:[]};

    case 'REMOVE':
      return {...state, cart:state.cart.filter((cartItem) => cartItem.id !== action.payload)};

    case 'TOGGLE_AMOUNT':
      let tempCart = state.cart.map((cartItem) =>{
        if (cartItem.id === action.payload.id){
          if (action.payload.type === 'inc'){
            return {...cartItem, amount: cartItem.amount + 1};
          }
          if (action.payload.type === 'dec'){
            return {...cartItem, amount: cartItem.amount - 1}
          }
        }
        return cartItem;
      }).filter((cartItem) => cartItem.amount !== 0)
      return {...state, cart:tempCart};

      case 'GET_TOTALS':
        let {total, amount, subtotal} = state.cart.reduce((cartTotal, cartItem)=>{
          const {price, amount} = cartItem;
          const itemTotal = price * amount;

          cartTotal.subtotal += itemTotal
          cartTotal.total = cartTotal.subtotal + cartTotal.shipping
          cartTotal.amount += amount;
          return cartTotal
        }, {
          total:0,
          amount:0,
          subtotal:0,
          shipping:2218,
        })
        return {...state, total, amount, subtotal}

    default:
      throw new Error('no matching action type');
    
  }
}

export default reducer;