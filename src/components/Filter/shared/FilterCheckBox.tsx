import { FC } from 'react';
import { FilterCheckBoxProps } from '~/utils/types';

const FilterCheckBox: FC<FilterCheckBoxProps> = ({ name, quantity }) => {
  return (
    <div className="flex items-center gap-1  ">
      <input type="checkbox" id={name} />
      <label
        htmlFor={name}
        className="hover:text-primary cursor-pointer transition-all"
      >
        <span className="whitespace-nowrap">{name}</span>
        <span>({quantity})</span>
      </label>
    </div>
  );
};

export default FilterCheckBox;
