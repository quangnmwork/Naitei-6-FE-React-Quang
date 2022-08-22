import { FC } from 'react';
import { TypeFilterProps } from '~/utils/types';
import FilterCheckBox from './shared/FilterCheckBox';
import FilterContainer from './shared/FilterContainer';

const TypeFilter: FC<TypeFilterProps> = ({ checkboxes }) => {
  return (
    <FilterContainer text={'Type'}>
      <>
        {checkboxes.map((checkbox) => (
          <FilterCheckBox
            key={checkbox.name}
            name={checkbox.name}
            quantity={checkbox.quantity}
          />
        ))}
      </>
    </FilterContainer>
  );
};

export default TypeFilter;
