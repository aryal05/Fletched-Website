import React, { useContext, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useEffect } from 'react'
import Title from './Title'
const BestSeller = () => {
    const {products} = useContext(ShopContext);

    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item) => item.bestseller)
        setBestSeller(bestProduct.slice(0,5))

    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
           <Title text1={"BEST"} text2={"SELLERS"}/>
            <p className='w-3/4 m-auto text-xs sn:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium odit
                eaque quo vero dicta? Similique.</p>

        </div>
      
    </div>
  )
}

export default BestSeller
