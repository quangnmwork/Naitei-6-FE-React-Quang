import { SearchIcon, IcOutlineClose } from '~/components/icons/Icons';

const FilterSearch = () => {
  return (
    <form className="max-w-full h-full relative my-1">
      <input
        placeholder={'Search...'}
        required
        className="rounded-lg px-4 text-sm w-full"
      />
      <button
        type="submit"
        title="Submit your query"
        className="absolute h-full top-0 left-1"
      >
        <SearchIcon />
      </button>
      <button
        type="reset"
        title="Reset your input"
        className="absolute h-full top-0 right-0"
      >
        <IcOutlineClose />
      </button>
    </form>
  );
};

export default FilterSearch;
