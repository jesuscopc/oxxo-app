import React from 'react';
import { Link } from 'react-router-dom';
type TItem = {
  original_price: string;
  product_detail_url: string;
  product_id: string;
  product_main_image_url: string;
  product_title: string;
};

type TData = {
  data: TItem[];
};

const TableRequest = ({ data }: TData) => {
  return (
    <ul>
      {data.map(
        ({
          product_main_image_url,
          product_title,
          original_price,
          product_detail_url,
          product_id
        }) => (
          <li className="flex flex-col p-5 mt-5 rounded-xl md:flex-row bg-white" key={product_id}>
            <img
              className="rounded-lg mx-auto md:m-0"
              width="200px"
              height="200px"
              src={product_main_image_url}
            />
            <div className="flex flex-col p-5">
              <p className="font-bold pb-4">{product_title}</p>
              <span className="text-4xl pb-4">{original_price}</span>
              <Link
                className="text-blue-500 font-extrabold underline"
                tabIndex={0}
                to={product_detail_url}
              >
                Detalle producto
              </Link>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default TableRequest;
