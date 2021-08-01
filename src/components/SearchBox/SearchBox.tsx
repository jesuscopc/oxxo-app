import React from 'react';

const SearchBox = () => {
  return (
    <form className="flex flex-col pt-8 max-w-sm mx-auto">
      <input placeholder="Buscar Productos" className="appearance-none p-2 mb-3 shadow-md" />
      <button
        type="button"
        className="p-2 bg-green-600 font-bold text-white rounded-md ring-green-400"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBox;
