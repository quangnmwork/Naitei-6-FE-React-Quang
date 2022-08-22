import { FC, PropsWithChildren } from 'react';

interface FilterSectionProps {
  text: string;
}

const FilterSection: FC<PropsWithChildren<FilterSectionProps>> = ({
  text,
  children
}) => {
  return (
    <div>
      <div className="font-medium text-neutral-500  text-lg">{text}</div>
      {children}
    </div>
  );
};

export default FilterSection;
