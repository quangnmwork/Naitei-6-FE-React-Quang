import TreeViewFilter from '~/components/Filter/TreeViewFilter';
import TypeFilter from './TypeFilter';
import { BRAND_TYPE, FILTER_TYPE, PRICE, RATINGS } from '~/utils/constant';
import BrandFilter from './BrandFilter';
import StarFilter from './StarFilter';
import PriceFilter from './PriceFilter';
import FilterPriceInput from './FilterPriceInput';
import FilterSection from './shared/FilterSection';

const MainFilter = () => {
  return (
    <aside className="bg-white border-solid border-r border-black overflow-y-auto p-3">
      <FilterSection text={'Show result for'}>
        <TreeViewFilter />
      </FilterSection>
      <FilterSection text={'Refine by'}>
        <TypeFilter checkboxes={FILTER_TYPE} />
        <BrandFilter checkboxes={BRAND_TYPE} />
        <StarFilter stars={RATINGS} />
        <PriceFilter prices={PRICE} />
        <FilterPriceInput />
      </FilterSection>
    </aside>
  );
};

export default MainFilter;
