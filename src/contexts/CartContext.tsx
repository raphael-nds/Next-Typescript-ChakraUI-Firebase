import { createContext, useContext, useState } from "react"

export const cartContext = createContext({})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    function handleAddItemCart(imgAd: any, titleAd: any, priceAd: any, qntdAd: any){
        const itemObject = { imgAd, titleAd, priceAd, qntdAd}
        setCart([...cart, itemObject]);
    }

    function handleRemoveItemCart(itemIndex: any){
        const filteredCart = cart.filter(
            (cartItem) => cart.indexOf(cartItem) !== itemIndex
        );
        setCart(filteredCart);
    }

    function clearCart(){
        setCart([])
    }

    return (
        <cartContext.Provider value={{ cart, handleAddItemCart, handleRemoveItemCart, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(cartContext)

    return context
}