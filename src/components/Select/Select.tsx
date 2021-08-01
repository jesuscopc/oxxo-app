import React from 'react';

export type TCatalog = {
  id: string;
  name: string;
};

interface TSelect {
  label: string;
  options: TCatalog[];
  onSelect: React.ChangeEventHandler<HTMLSelectElement>;
  name: string;
  isLoading?: boolean;
}

const Select = ({ label, name, options, isLoading, onSelect }: TSelect): React.ReactElement => {
  return (
    <>
      <label className="font-black pb-2">{label}</label>
      <select
        className="p-5 mb-3 shadow-lg bg-blue-400 text-white rounded-lg font-bold"
        onChange={onSelect}
        name={name}
      >
        {isLoading ? (
          <option>Loading...</option>
        ) : (
          options.map(({ id, name }) => (
            <option className="appearance-none h-3  " key={id} value={id}>
              {name}
            </option>
          ))
        )}
      </select>
    </>
  );
};

export default Select;
