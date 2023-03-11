import Header from '../../components/Header/Header';
import React, {useState} from 'react';
import "./index.scss";
import { useParams } from "react-router-dom";
import ProductsCard from '../../components/ProductsCard/ProductsCard';


const Products = ({data}) => {
  console.log(data[0].id)
  return (
    <div className="products-time">
    <Header />
    <div className="home__products">
        {data.map((product) => (
          <ProductsCard key={product.id} data={product} />
        ))}
      </div>
  </div>
  );
};

export default Products;