import { FC } from 'react';
import { FilterPricesProps } from '~/utils/types';
import FilterContainer from './shared/FilterContainer';
import FilterPrice from './shared/FilterPrice';

const PriceFilter: FC<FilterPricesProps> = ({ prices }) => {
  return (
    <FilterContainer text={'Prices'}>
      {prices.map((price, index) => (
        <FilterPrice key={index} {...price} />
      ))}
    </FilterContainer>
  );
};

export default PriceFilter;
