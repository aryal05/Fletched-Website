import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const {productId} =useParams();
  const {products} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')

  const fetchPoductData = async()=>{

    products.map((item)=>{
      if(item.id === productId){
        setProductData(item)
        setImage(item.image[0])

        return null;
      }
    })

  }

  useEffect(()=>{
    fetchPoductData();

  },[productId, products])



  return productData? (

    <div className='broder-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'> 

        {/* Porduct Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'></div>

      </div>

      
    </div>
  ):<div className='opacity-0'></div>
}

export default Product
