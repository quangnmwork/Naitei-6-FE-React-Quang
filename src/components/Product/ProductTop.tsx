import { FC } from 'react';
interface ProductTopProps {
  resultNum: number;
  seconds: number;
}
const options = ['Feature', 'Asc', 'Dsc'];
const ProductTop: FC<ProductTopProps> = ({ resultNum, seconds }) => {
  return (
    <div className="flex justify-between mb-4">
      <p className="text-sm">
        {resultNum} results found in {seconds}ms
      </p>
      <form>
        <span>Sort by</span>
        <select className="ml-2">
          {options.map((opt) => (
            <option value={opt} key={opt}>
              {opt}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default ProductTop;
