import { Children, FC, PropsWithChildren } from 'react';

const ProductLayout: FC<
  PropsWithChildren<{ gridNum: number; gap?: number }>
> = ({ gridNum, children }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-${gridNum} gap-4`}
    >
      {children}
    </div>
  );
};

export default ProductLayout;
