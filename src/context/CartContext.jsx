import { createContext, useState } from "react";
export const CartContext = createContext() 

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
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearItems = () => {
        setItems([]);     
    }

    const totalPrenda = (id) => {
        let index = items.map(item => item.id).indexOf(id);
        return items[index].price * items[index].counter;
    }

    const subTotalProductos = () => {
        let subTotalSeleccionados = items.map(item => totalPrenda(item.id));
        return subTotalSeleccionados.reduce((previousValue, currentValue) => previousValue + currentValue); 
    }

    const impuestos = () => {
        return subTotalProductos() * 0.21;
    }

    const costoEnvio = () => {
        return subTotalProductos() *0.01
    }

    const totalCompra = () => {
        return (subTotalProductos() + impuestos() + costoEnvio());
    }
    const finalizarCompra = () => {
        setItems([]);
        alert("Gracias por su compra!");
    }

    return(
        <CartContext.Provider  value={[{ items, addItem, removeItem, clearItems, totalPrenda, subTotalProductos, impuestos, costoEnvio, totalCompra, finalizarCompra }]}>
            {children}
        </CartContext.Provider>
    );

}
export default CartContextProvider;