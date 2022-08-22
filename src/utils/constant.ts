import { FilterPriceProps } from './types';

export const FILTER_TYPE = [
  {
    name: 'Trend cases',
    quantity: 457
  },
  {
    name: 'Ult protection cases',
    quantity: 457
  },
  {
    name: 'Ink cartridges',
    quantity: 457
  },
  {
    name: 'Business cases',
    quantity: 457
  },
  {
    name: 'Connectivity',
    quantity: 457
  }
];
export const BRAND_TYPE = [
  {
    name: 'Samsung',
    quantity: 457
  },
  {
    name: 'Metra',
    quantity: 457
  },
  {
    name: 'HP',
    quantity: 457
  },
  {
    name: 'Apple',
    quantity: 457
  }
];

export const RATINGS = [
  {
    rating: 4.5,
    quantity: 16074
  },
  {
    rating: 3.5,
    quantity: 16074
  },
  {
    rating: 3,
    quantity: 164
  },
  {
    rating: 2,
    quantity: 16073
  }
];

export const PRICE: FilterPriceProps[] = [
  {
    compare: 'less',
    firstPrice: 10
  },
  {
    compare: 'equal',
    firstPrice: 10,
    secondPrice: 80
  },
  {
    compare: 'equal',
    firstPrice: 80,
    secondPrice: 160
  },
  {
    compare: 'equal',
    firstPrice: 160,
    secondPrice: 240
  },
  {
    compare: 'equal',
    firstPrice: 240,
    secondPrice: 1820
  },
  {
    compare: 'equal',
    firstPrice: 1820,
    secondPrice: 3400
  },
  {
    compare: 'equal',
    firstPrice: 3400,
    secondPrice: 4980
  },
  {
    compare: 'great',
    firstPrice: 4980
  }
];
