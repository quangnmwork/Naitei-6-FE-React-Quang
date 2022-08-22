import { Pagination } from '@mui/material';
import { FC } from 'react';
import { PaginationProps } from '~/utils/types';

const PaginationProduct: FC<PaginationProps> = ({ num }) => {
  return (
    <div className="flex justify-center mt-4">
      <Pagination count={num} variant="outlined" shape="rounded" />
    </div>
  );
};

export default PaginationProduct;
