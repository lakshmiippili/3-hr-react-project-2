import {useState} from 'react'
import candyCxt from './candy-context'
const ContextProvider = (props)=>{
    const [items,setItems]= useState([])
    const [cartItems,setCartItems] = useState([])
    const addItemHandler =(item) =>{
        setItems([...items,item])
    }
    const addToCartHandler = item =>{
        const index = cartItems.findIndex(i=> i.name === item.name)
        if(index===-1){
            setCartItems(prevItems => [...prevItems,{...item}])
        }else{
            const updatedItems =[...cartItems]
            updatedItems[index].quantity = updatedItems[index].quantity +item.quantity
            setCartItems(updatedItems)
        }
    }
    const Context ={
        items:items,
        cartItems:cartItems,
        addItem:addItemHandler,
        addToCart:addToCartHandler
    }
    return <candyCxt.Provider value={Context}>
    {props.children}</candyCxt.Provider>
}

export default ContextProvider