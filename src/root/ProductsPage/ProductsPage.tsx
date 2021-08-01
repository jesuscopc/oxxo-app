import SearchBox from 'components/SearchBox/SearchBox';
import TableRequest from 'components/TableRequest/TableRequest';
import React from 'react';

const ProductsPage = () => {
  return (
    <div className="container mx-auto">
      <SearchBox />
      <TableRequest />
    </div>
  );
};

export default ProductsPage;
