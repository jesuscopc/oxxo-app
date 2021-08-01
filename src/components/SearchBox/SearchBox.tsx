import React, { useRef } from 'react';

type TSearch = {
  handleSubmit: (value: string) => void;
  loading: boolean;
};

const SearchBox = ({ handleSubmit, loading }: TSearch): JSX.Element => {
  const input = useRef<any>('');
  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(input.current.value);
    handleSubmit(input.current.value);
  };
  return (
    <form className="flex flex-col pt-8 max-w-sm mx-auto" onSubmit={submitForm}>
      <input
        placeholder="Buscar Productos"
        className="appearance-none p-2 mb-3 shadow-md"
        ref={input}
      />
      <button
        type="submit"
        className={`p-2 bg-green-600 font-bold text-white rounded-md ring-green-400
          ${loading && 'opacity-50'}
          `}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Buscar'}
      </button>
    </form>
  );
};

export default SearchBox;
