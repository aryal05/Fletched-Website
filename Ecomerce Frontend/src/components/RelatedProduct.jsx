import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProduct = ({category,subCategory}) => {
    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState('')
  
    useEffect(()=>{
        if(products.length> 0){
            let productCopy = products.slice();
            productCopy = productCopy.filter((item) => category === item.category)
            productCopy = productCopy.filter((item) => subCategory === item.subCategory)
        }
    })

  return (
    <div>
       
    </div>
  )
}

export default RelatedProduct
