import React, { useEffect, useState } from 'react';
import Select, { TCatalog } from 'components/Select/Select';
import COUNTRIES from 'constants/Countries';
import { CatalogsService } from 'services';

const MainPage = () => {
  const [categories, setCategories] = useState<TCatalog[]>([]);

  useEffect(() => {
    CatalogsService.getCategories()
      .then((data: TCatalog[]) => {
        setCategories(data);
      })
      .catch(err => console.error(err));
  }, []);
  const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget.value);
    console.log(event.currentTarget.name);
  };
  return (
    <form className="flex flex-col max-w-sm m-auto h-screen justify-center">
      <Select
        label="Selecciona Un Pais"
        name="country"
        options={COUNTRIES}
        onSelect={handleSelect}
      />
      <Select
        label="Selecciona una categoria"
        name="category"
        options={categories}
        onSelect={handleSelect}
      />
    </form>
  );
};

export default MainPage;
