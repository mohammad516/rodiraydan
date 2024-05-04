'use client'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import Inner from '../_components/Inner'
import ProductList from '../_components/ProductList'
import ProductApis from '../_utils/ProductApis'

function Products() {
  const [productList,setProductList]= useState([])
	useEffect(()=>{
		getLatestProducts_();
	},[])
	const getLatestProducts_=()=>{
		ProductApis.getLatestProducts().then(res=>{
			console.log(res.data.data);
			setProductList(res.data.data)
		})
	}
  return (
   <>
        <Script src="/js/bootstrap.js"/>
        <Inner title="продукты"/>
        <ProductList productList={productList}/>
   
   </>
  )
}

export default Products