import { createContext, useState } from "react";

export const CartContext = createContext() //Creamos un espacio global de memoria (context)

const CartContextProvider = ({ children }) => {

    const [items, setItems] = useState([]);

    const isInCart = (id) => {
        const foundProduct = items.find(item => item.id === id);
        return foundProduct;
    }
    
    const addItem = ({item, counter}) => {
        
        isInCart(item.id) ?
            setItems(items.map((prod) => {
                if(prod.id === item.id){
                    prod.counter += counter
                }
                return prod
            }))
            :
            setItems([...items, {id: item.id, name: item.title, price: item.price, picture: item.picture, counter: counter}]);
            console.log('Producto en addItem', item);
            // alert('llegando');   
            // console.log('producto desde CartContextProvider', item);
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearItems = () => {
        setItems([]);     
    }

    const totalPrenda = (idItem) => {
        let index = items.map(item => item.idItem).indexOf(idItem);
        return items[index].price * items[index].counter;
    }

    return(
        <CartContext.Provider  value={[{ items, addItem, removeItem, clearItems, totalPrenda }]}>
            {children}
        </CartContext.Provider>
    );

}
export default CartContextProvider;