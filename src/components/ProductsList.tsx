// src/components/ProductsList.tsx

import React from "react"
import { Col, Row } from "reactstrap"
import { ProductType } from "../components/services/products"
import ProductCard from "../components/ProductsCard"

type ProductListProps = {
  products: ProductType[]
}

const ProductsList: React.FC<ProductListProps> = ({ products }) => {

  return (
    <>
      <Row className="g-5">
        {products.map(product => (
          <Col md={6} lg={4} xl={3} key={product.id}>
            <ProductCard
              product={product}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default ProductsList