import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Select, { TCatalog } from 'components/Select/Select';
import COUNTRIES from 'constants/Countries';
import { CatalogsService } from 'services';

const MainPage = () => {
  const [categories, setCategories] = useState<TCatalog[]>([]);
  const [country, setCountry] = useState<string>('MX');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    CatalogsService.getCategories(country)
      .then(data => {
        setCategories(data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [country]);

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    if (event.currentTarget.name === 'country') {
      setCountry(event.currentTarget.value);
    }
    if (event.currentTarget.name === 'category' && event.currentTarget.value !== '') {
      history.push(`/products?category=${event.currentTarget.value}`);
    }
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
        isLoading={isLoading}
        label="Selecciona una categoria"
        name="category"
        options={categories}
        onSelect={handleSelect}
      />
    </form>
  );
};

export default MainPage;
