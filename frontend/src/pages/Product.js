import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Context'
import Breadcrumb from '../components/breadcrumbs/Breadcrumb';
import ProductDisplay from '../components/productDisplay/ProductDisplay';

export default function Product() {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((item) => item.id === Number(productId));

  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}
