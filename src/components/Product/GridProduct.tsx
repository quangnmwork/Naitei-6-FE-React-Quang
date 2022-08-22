import { ProductProps } from '~/utils/types';
import ProductCard from './shared/ProductCard';
import ProductLayout from './shared/ProductLayout';

const Product: ProductProps = {
  img: 'https://cdn-demo.algolia.com/bestbuy-0118/6443034_sb.jpg',
  name: 'Apple - MacBook Air® (Latest Model) - 13.3" Display - Intel Core i5 - 8GB Memory - 128GB Flash Storage - Silver',
  price: 999,
  rating: 4.5
};

const GridProduct = () => {
  return (
    <ProductLayout gridNum={4}>
      {[...Array(20)].map((_, index) => (
        <ProductCard
          key={index}
          img={Product.img}
          name={Product.name}
          rating={Product.rating}
          price={Product.price}
        />
      ))}
    </ProductLayout>
  );
};

export default GridProduct;
