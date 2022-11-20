import React from 'react'
import { ProductType } from '../../store/catalog/types'
import styles from './product.module.css'

type Props = {
  product: ProductType
}

const Product: React.FC<Props> = ({product}) => {
  return (
    <div>
      <img className={styles['product-img']} src={`http://smktesting.herokuapp.com/static/${product.img}/`} alt="alt" />
      <h2>{product.title}</h2>
      <p>{product.text}</p>
    </div>
  )
}

export default Product