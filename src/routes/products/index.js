import React from 'react'
import {connect} from 'dva'
import ProductList from '../../components/productList'

const Products = ({dispatch,products}) =>{
  function handleDelete(id){
    dispatch({
      type:'products/delete',
      payload:id
    })
  }

  const time = new Date().toLocaleTimeString()
  return (
    <div>
      <h2>list of products {time}</h2>
      <ProductList onDelete = {handleDelete} products = {products}/>
    </div>
  )
}

// export default Products
export default connect(({products})=>({
  products
}))(Products)

