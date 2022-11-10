/* eslint-disable array-callback-return */
import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

import { client } from '../client'
const Context = createContext()

export const StoreContext = ({ children }) => {
  const [Qty, setQty] = useState(1)
  const [cartItems, setcartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [showCart, setshowCart] = useState(false)
  const [count, setcount] = useState(0);
  const [heroBanner, setheroBanner] = useState([])
  const [categroy, setcategroy] = useState([])
  const [brand, setbrand] = useState([])
  const [LoveItem, setLoveItem] = useState([]);
  let data = heroBanner[1]
  const [Items, setItems] = useState([])
  let dataBanner = heroBanner[0]
  let foundProduct

console.log(count)


  useEffect(() => {
    const data = async () => {
      const query = '*[_type == "product"]'
      const products = await client.fetch(query)

      setItems(products)
    }
    const banner = async () => {
      const bannerQuery = '*[_type == "banner"]'
      const bannerData = await client.fetch(bannerQuery)

      setheroBanner(bannerData)
    }
    const categroy = async () => {
      const query = '*[_type == "categroy"]'
      const categroyData = await client.fetch(query)

      setcategroy(categroyData)
    }
    const Brand = async () => {
      const query = '*[_type == "brand"]'
      const brandData = await client.fetch(query)

      setbrand(brandData)
    }
    banner()
    data()
    categroy()
    Brand()
  }, [])

  const incQty = () => {
    setQty(prevQty => prevQty + 1)
  }
  const decQty = () => {
    setQty(prevQty => {
      if (prevQty - 1 < 1) return 1

      return prevQty - 1
    })
  }

  const addToCart = item => {
    const checkProductInCart = cartItems.find(i => i._id === item._id)
   
    if (!checkProductInCart) {
      item.quantity = 1
          setTotalPrice(prevTotalPrice => prevTotalPrice + item.price)
  toast.success('added to the cart.')
      setcartItems([...cartItems, item])
      setcount(prev => prev + 1)
     
    }
    
  }

  const addToCartQuanity = (item, qut) => {
    setTotalPrice(prevTotalPrice => prevTotalPrice + item.price * qut)

    const checkProductInCart = cartItems.find(i => i._id === item._id)
    if (checkProductInCart) {
      const newCart = cartItems.filter(i => i._id !== item._id)

      setcartItems([
        ...newCart,
        { ...checkProductInCart, quantity: checkProductInCart.quantity + qut }
      ])
      setcount(prev => prev + qut)
      setQty(0)
    } else {
      item.quantity = qut
      setcartItems([...cartItems, { ...item }])
      setcount(prev => prev + qut)

      setQty(0)
    }
  }

  let index
  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find(item => item._id === id)
    index = cartItems.findIndex(product => product._id === id)

    const newCartItems = cartItems.filter(item => item._id !== id)
    console.log(index)
console.log(newCartItems)
console.log(foundProduct)
    if (value === 'inc') {
      newCartItems.splice(index, 0, {
        ...foundProduct,
        quantity: foundProduct.quantity  + 1
      })
      setcount(prev => prev + 1)

      setcartItems(newCartItems)

      setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price)
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        newCartItems.splice(index, 0, {
          ...foundProduct,
          quantity: foundProduct.quantity  - 1
        })
        setcartItems(newCartItems)
        setcount(prev => prev - 1)

        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price)
      }
    }
  }

  const deleteItem = item => {
    const newcard = cartItems.filter(i => i._id !== item._id)
    const newcount = cartItems.find(i => i._id === item._id)
setcount(prev => prev - newcount.quantity)
    setcartItems(newcard)
    setTotalPrice(prev => prev- (newcount.quantity * newcount.price))
  }

const AddToLove = (item)=>{
  const checkProductInCart = LoveItem.find(i => i._id === item._id)

  if (!checkProductInCart) {
    setLoveItem([...LoveItem, item])
  }
  toast.success(`added to the cart.`)

}

const deleteLove = item => {
  const newcard = LoveItem.filter(i => i._id !== item._id)
setLoveItem(newcard)
}


  return (
    <Context.Provider
      value={{
        cartItems,
        Items,
        addToCart,
        decQty,
        incQty,
        Qty,
        addToCartQuanity,
        toggleCartItemQuanitity,
        showCart,
        setshowCart,
        totalPrice,
        heroBanner,
        data,
        dataBanner,
        deleteItem,
        categroy,
        brand,
        count,
        AddToLove,
        LoveItem,
        deleteLove
      }}
    >
      {children}{' '}
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context)
