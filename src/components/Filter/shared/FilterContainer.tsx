import { FC, PropsWithChildren } from 'react';

interface FilterContainerProps {
  text: string;
}

const FilterContainer: FC<PropsWithChildren<FilterContainerProps>> = ({
  text,
  children
}) => {
  return (
    <div className={'my-2'}>
      <div className="font-bold mt-1 mb-1">{text}</div>
      {children}
    </div>
  );
};

export default FilterContainer;
