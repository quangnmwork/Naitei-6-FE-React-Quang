import React from 'react';
import GridProduct from './GridProduct';
import PaginationProduct from './PaginationProduct';
import ProductTop from './ProductTop';

const MainProduct = () => {
  return (
    <div className="p-3 w-full">
      <ProductTop resultNum={21000} seconds={2} />
      <GridProduct />
      <PaginationProduct num={10} />
    </div>
  );
};

export default MainProduct;
