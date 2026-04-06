import React from 'react'
import { Link } from 'react-router-dom'
function Products() {
  return (
    <ul>
        <li><Link to={"/products/1"}>Iphone</Link></li>
        <li><Link to={"/products/2"}>SamSung</Link></li>
        <li><Link to={"/products/3"}>lapTop</Link></li>
    </ul>
  )
}


export default Products
