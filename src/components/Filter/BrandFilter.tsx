import { FC } from 'react';
import { TypeFilterProps } from '~/utils/types';
import FilterCheckBox from './shared/FilterCheckBox';
import FilterContainer from './shared/FilterContainer';
import FilterSearch from './shared/FilterSearch';

const BrandFilter: FC<TypeFilterProps> = ({ checkboxes }) => {
  return (
    <FilterContainer text={'Brand'}>
      <>
        <FilterSearch />
        {checkboxes.map((checkbox) => (
          <FilterCheckBox key={checkbox.name} {...checkbox} />
        ))}
      </>
    </FilterContainer>
  );
};

export default BrandFilter;
