import { Rating } from '@mui/material';
import { FC } from 'react';
import { ProductProps } from '~/utils/types';

const ProductCard: FC<ProductProps> = ({ img, name, price, rating }) => {
  return (
    <div className="border-2 border-neutral-300 rounded-sm hover:shadow-md cursor-pointer p-2">
      <div>
        <img src={img} alt={''} className="w-full h-auto" />
      </div>
      <p>{name}</p>
      <div className="flex justify-between">
        <Rating value={rating} size="small" readOnly />
        <span className="font-bold">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
