export interface RenderTree {
  id: string;
  name: string;
  children?: readonly RenderTree[];
}

export interface FilterCheckBoxProps {
  name: string;
  quantity: number;
}

export interface TypeFilterProps {
  checkboxes: FilterCheckBoxProps[];
}
export interface FilterRatingProps {
  rating: number;
  quantity: number;
}
export interface FilterStarProps {
  stars: FilterRatingProps[];
}
export interface FilterPriceProps {
  firstPrice: number;
  secondPrice?: number;
  compare: 'less' | 'equal' | 'great';
}
export interface FilterPricesProps {
  prices: FilterPriceProps[];
}
export interface ProductProps {
  img: string;
  name: string;
  rating: number;
  price: number;
}
export interface PaginationProps {
  num: number;
}
