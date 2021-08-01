import React from 'react';

export type TCatalog = {
  id: string;
  value: string;
};

interface TSelect {
  label: string;
  options: TCatalog[];
  onSelect: React.ChangeEventHandler<HTMLSelectElement>;
  name: string;
}

const Select = ({ label, name, options, onSelect }: TSelect): React.ReactElement => {
  return (
    <>
      <label className="font-black pb-2">{label}</label>
      <select
        className="p-5 mb-3 shadow-lg bg-blue-400 text-white rounded-lg font-bold"
        onChange={onSelect}
        name={name}
      >
        {options.map(({ id, value }) => (
          <option className="appearance-none h-3  " key={id} value={id}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
