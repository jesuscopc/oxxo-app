import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBox from 'components/SearchBox/SearchBox';
import TableRequest from 'components/TableRequest/TableRequest';
import UseApiProduct from 'hooks/UseApiProduct';

const ProductsPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const category = query.get('category') || '';
  const [keyword, setKeyword] = useState<string>('');
  const { data, loading } = UseApiProduct(category, keyword);

  const sendPattern = (keyword: string) => {
    setKeyword(keyword);
  };

  return (
    <div className="container mx-auto">
      <SearchBox handleSubmit={sendPattern} loading={loading} />
      <TableRequest data={data} />
    </div>
  );
};

export default ProductsPage;
