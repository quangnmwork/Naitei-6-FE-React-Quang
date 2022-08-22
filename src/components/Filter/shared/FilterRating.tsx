import { FC } from 'react';
import Rating from '@mui/material/Rating';
import { FilterRatingProps } from '~/utils/types';

const FilterRating: FC<FilterRatingProps> = ({ quantity, rating }) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
      <Rating value={rating} precision={0.5} size="small" />
      <span>&</span>
      <span>Up {quantity}</span>
    </div>
  );
};

export default FilterRating;
