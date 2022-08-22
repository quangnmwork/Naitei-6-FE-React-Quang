const FilterPriceInput = () => {
  return (
    <form>
      <div className="flex items-center gap-1 max-w-full">
        <label htmlFor={'first'}>$</label>
        <input type="number" min={1} id={'first'} className="w-12" />
        <span>to</span>
        <label htmlFor={'second'}>$</label>
        <input type="number" min={1} id={'second'} className="w-12" />
        <button type="button" className="rounded-full bg-gray p-1 text-white">
          Go
        </button>
      </div>
    </form>
  );
};

export default FilterPriceInput;
