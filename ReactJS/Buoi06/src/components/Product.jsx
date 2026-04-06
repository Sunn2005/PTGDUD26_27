import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Product() {
    const {id} = useParams();
  return (
    <div>
      <h2>Danh sách SP</h2>
      <p>ProductID : {id}</p>
        <Link></Link>
    </div>
  )
}

export default Product
