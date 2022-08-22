import { FC } from 'react';
import { FilterPriceProps } from '~/utils/types';

const FilterPrice: FC<FilterPriceProps> = ({
  compare,
  firstPrice,
  secondPrice
}) => {
  if (compare === 'less' || compare === 'great') {
    return (
      <p className="flex items-center gap-1 cursor-pointer hover:text-primary">
        <small>{compare === 'less' ? '<' : '>'}</small>
        <small>{firstPrice}</small>
      </p>
    );
  }
  return (
    <p className="flex items-center gap-1 cursor-pointer hover:text-primary">
      <small>${firstPrice}</small>
      <small>-</small>
      <small>{secondPrice}</small>
    </p>
  );
};

export default FilterPrice;
