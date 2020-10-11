import React,{createContext,useState} from 'react'

export let ShoppingCartContext = createContext()

export let ShoppingCartProvider = ({children}) => {

	let [shoppingCart,setShoppingCart] = useState([{
		id:1,
		name:'Verona',
		artType:'Digital Photo',
		matStyle:'White',
		frameSize:'24*24',
		price:65
	},{
		id:2,
		name:'Verona',
		artType:'Mail In',
		matStyle:'White',
		frameSize:'24*24',
		price:65
	}])

	return(
			<ShoppingCartContext.Provider value={{shoppingCart,setShoppingCart}}>
				{children}
			</ShoppingCartContext.Provider>	
		)
}