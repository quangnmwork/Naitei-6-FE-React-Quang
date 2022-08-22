import React from 'react';
import MainFilter from '~/components/Filter/MainFilter';
import MainProduct from '~/components/Product/MainProduct';

const AllProduct = () => {
  return (
    <div className="flex flex-shrink-0 flex-grow-0 ">
      <MainFilter />
      <MainProduct />
    </div>
  );
};

export default AllProduct;
