import { SearchIcon, Logo } from '~/components/icons/Icons';

const Navigation = () => {
  return (
    <header className=" w-full flex  bg-nav items-center py-3 px-4 ">
      <div>
        <Logo className={'h-full w-20'} />
      </div>
      <h1 className="text-white font-bold text-2xl  ml-3">Woo</h1>
      <form className="h-full ml-5 flex items-center">
        <input
          className="px-6 py-1 rounded-l-lg self-stretch "
          placeholder="Search something ..."
        />
        <button className=" bg-primary self-stretch rounded-r-lg text-center px-3">
          <SearchIcon className={'w-6 h-6'} />
        </button>
      </form>
    </header>
  );
};

export default Navigation;
