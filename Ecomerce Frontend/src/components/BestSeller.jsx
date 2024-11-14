import React, { useContext, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useEffect } from 'react'
const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        const bestProduct = products.filter((item) => item.bestSeller)
        setBestSeller(bestProduct.slice(0,5))

    },[])
  return (
    <div>
      
    </div>
  )
}

export default BestSeller
