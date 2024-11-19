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

    <div>

      
    </div>
  ):<div className='opacity-0'></div>
}

export default Product
