import React, {useEffect, useContext, useReducer, useState} from 'react';
import reducer from './reducer';

const AppContext = React.createContext()


const initialState = {
  cart: [],
  total: 0,
  amount: 0,
  shipping: 2218,
  subtotal: 0,
}

const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id) =>{
    dispatch({type: 'ADD_ITEM', payload:id})
  }
  const clearCart = () =>{
    dispatch({type: 'CLEAR_CART'})
  }
  const remove = (id) =>{
    dispatch({type: 'REMOVE', payload:id})
  }
  const toggleAmount = (id, type) => {
    dispatch({type:'TOGGLE_AMOUNT', payload:{id:id, type:type}})
  }
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  }
  useEffect(()=>{
    dispatch({type: 'GET_TOTALS'})
  }, [state.cart])

  return (
    <AppContext.Provider
    value={{
      ...state,
      addToCart,
      clearCart,
      remove,
      toggleAmount,
      isSidebarOpen,
      isModalOpen,
      openModal,
      closeModal,
      openSidebar,
      closeSidebar,
    }}
    >
    {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () =>{
  return useContext(AppContext)
}

export { AppContext, AppProvider }