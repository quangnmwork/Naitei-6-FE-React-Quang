import { FC } from 'react';
import { FilterRatingProps, FilterStarProps } from '~/utils/types';
import FilterContainer from './shared/FilterContainer';
import FilterRating from './shared/FilterRating';

const StarFilter: FC<FilterStarProps> = ({ stars }) => {
  return (
    <FilterContainer text={'Prices'}>
      {stars.map((rating, index) => (
        <FilterRating
          key={index}
          quantity={rating.quantity}
          rating={rating.rating}
        />
      ))}
    </FilterContainer>
  );
};

export default StarFilter;
